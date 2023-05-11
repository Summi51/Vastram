// import { ReactNode } from 'react';
import {
  Box,
  Button,
  chakra,
  Container,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import AppStoreBadge from "../components/AppStoreBadge";
import BarCode from "../components/BarCode";
import PlayStoreBadge from "../components/PlayStoreBadge";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("#C8C8C8", "whiteAlpha.100")}
      rounded={"full"}
      w={12}
      h={12}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("gray", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Box>
        <hr style={{ marginTop: "50px", border: "1px solid gray" }} />
      </Box>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 2, sm: 2, md: 4 }} spacing={"10%"}>
          <Stack align={"flex-start"}>
            <ListHeader>Customer Service</ListHeader>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Find my Order</Link>
            <Link href={"#"}>zReturns & Refunds</Link>
            <Link href={"#"}>Find a store</Link>
            <Link href={"#"}>Find a Wish List</Link>
            <Link href={"#"}>Find a Registry</Link>
            <Link href={"#"}>FAQs</Link>
          </Stack>
          {/* <Box style={{borderLeft:'1px solid gray', marginRight:'400px'}}></Box> */}
          <Stack align={"flex-start"}>
            <ListHeader>Vastram Rewards+ Credit Card</ListHeader>
            <Button
              style={{
                border: "1px solid blue",
                color: "blue",
                padding: "4%",
              }}
            >
              Apply Now
            </Button>
            <Link href={"#"}>Pay My Bill</Link>
            <Link href={"#"}>Manage My Account</Link>
            <Link href={"#"}>Credit Card Benefits</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>About Vastram</ListHeader>
            <Link href={"#"}>Careers</Link>
            <Link href={"#"}>Catalogs & Ads</Link>
            <Link href={"#"}>Brands We Carry</Link>
            <Link href={"#"}>Newsroom</Link>
            <Link href={"#"}>Behind the Brand</Link>
            <Link href={"#"}>Vendor Resources</Link>
            <Link href={"#"}>Store Events</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Get the Vastram App</ListHeader>
            <BarCode />
            <AppStoreBadge />
            <PlayStoreBadge />
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        style={{ display: "flex", justifyContent: "space-around" }}
        borderTopWidth={1}
        borderStyle={"solid"}
        mt={"5%"}
        borderColor={useColorModeValue("gray.900", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={"center"}
        >
          <Text fontSize={"2xl"} fontWeight={"700"} >Stay Connected</Text>
          <Stack direction={"row"} spacing={6} alignItems={"center"} m="auto">
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter style={{ width: "100%", height: "4vh" }} />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube style={{ width: "100%", height: "4vh" }} />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram style={{ width: "100%", height: "4vh" }} />
            </SocialButton>
          </Stack>
          <Box>
            <Input
            md="center"
              style={{
                width: "60%",
                height: "45px",
                marginLeft: "8%",
                borderRadius: "1px",
                borderTop: "1px solid gray",
                borderBottom: "1px solid gray",
                borderLeft: "1px solid gray",
              }}
              placeholder="Enter your email address"
            />
            <Button
              style={{
                backgroundColor: "black",
                color: "white",
                marginLeft: "5px",
                borderRadius: "1px",
              }}
            >
              Join
            </Button>
          </Box>
        </Container>
      </Box>
          <Box m="auto" w="80%">
            <Link href={"#"} style={{paddingLeft:'2%'}}>Terms of Use</Link>
            <Link href={"#"} style={{paddingLeft:'2%'}}>Privacy Policy</Link>
            <Link href={"#"}
            style={{paddingLeft:'4%'}}>Enable Accessibility</Link>
            <Link href={"#"} style={{paddingLeft:'2%'}}>Site Map</Link>
            <Link href={"#"} style={{paddingLeft:'2%'}}>Feedback</Link>
            <Link href={"#"} style={{paddingLeft:'2%'}}>CA Transparency</Link>
          </Box>
          <Box m="auto" mt="1%" pb={"10%"}>
          <Link href={"#"}  style={{paddingLeft:'2%'}}>Behind the Brand</Link>
            <Link href={"#"} style={{paddingLeft:'2%'}}>Vendor Resources</Link>
            <Link href={"#"} style={{paddingLeft:'2%'}}>Store Events</Link>
            <Link href={"#"} style={{paddingLeft:'2%'}}>Careers</Link>
            <Link href={"#"} style={{paddingLeft:'2%'}}>Catalogs & Ads</Link>
            <Link href={"#"} style={{paddingLeft:'2%'}}>Brands We Carry</Link>
          </Box>
    </Box>
  );
}