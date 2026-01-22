import {
  Box,
  Button,
  useToast,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { useState, useEffect } from "react";
import { validationSchema, FormValues } from "../utils/validation";
import { sendEmail } from "../utils/sendEmail";

import ContactDetails from "../components/Contact/ContactDetails";
import ContactCodeLines from "../components/Contact/ContactCodeLines";
import ContactForm from "../components/Contact/ContactForm";

interface Props {
  setPage: (page: string) => void;
}

const Contact = ({ setPage }: Props) => {
  useEffect(() => {
    setPage("contact.ts");
  }, []);

  const toast = useToast();
  const [totalLines, setTotalLines] = useState(14);
  const [messageLines, setMessageLines] = useState(1);
  const [loading, setLoading] = useState(false);

  const initialValues: FormValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleSubmit = async (values: FormValues, { resetForm }: any) => {
    setLoading(true);
    try {
      const result = await sendEmail(values);
      if (result.status === 200)
        toast({
          title: "Message Sent",
          description: "Your message has been sent successfully!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });

      resetForm();
      setMessageLines(1);
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "There was a problem sending your message.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setTotalLines(13 + messageLines);
  }, [messageLines]);

  return (
    <Box minHeight="100%" width="100%">
      <Box
        w="full"
        borderRadius="md"
        fontFamily="monospace"
        overflowX="hidden"
        pr="1rem"
      >
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur, errors, touched }) => {
            const errorMap: Record<number, string> = {};
            if (errors.name && touched.name) errorMap[10] = errors.name;
            if (errors.email && touched.email) errorMap[11] = errors.email;
            if (errors.subject && touched.subject)
              errorMap[12] = errors.subject;
            if (errors.message && touched.message)
              errorMap[13] = errors.message;

            return (
              <Form>
                <VStack
                  align="flex-start"
                  w="full"
                  justify={{ md: "space-between" }}
                  spacing={{ base: 4, md: 0 }}
                >
                  <Box w="full" display={{ base: "none", md: "block" }}>
                    <ContactCodeLines
                      totalLines={totalLines}
                      errorLines={Object.keys(errorMap).map(Number)}
                      errorMessages={errorMap}
                    />
                  </Box>
                  <HStack
                    align="flex-start"
                    spacing={2}
                    w="full"
                    flexDirection={{ base: "column", md: "row" }}
                    overflowX="visible"
                  >
                    <VStack
                      align="stretch"
                      w="full"
                      minW="auto"
                      px={{ base: 4, md: 0 }}
                    >
                      <ContactDetails />
                      <ContactForm
                        values={values}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        setMessageLines={setMessageLines}
                      />
                    </VStack>
                  </HStack>

                  <Button
                    type="submit"
                    bg="#0BCEAF"
                    color="white"
                    _hover={{ bg: "#09a88d" }}
                    mt={{ base: 4, md: 4 }}
                    ml={{ base: 0, md: 4 }}
                    w={{ base: "full", md: "auto" }}
                    px={{ base: 8, md: 6 }}
                    isLoading={loading}
                    loadingText="Sending..."
                  >
                    Send Message
                  </Button>
                </VStack>
              </Form>
            );
          }}
        </Formik>
      </Box>
    </Box>
  );
};

export default Contact;
