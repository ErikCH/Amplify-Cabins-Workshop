import {
  Card,
  Image,
  Heading,
  Icon,
  View,
  Text,
  Rating,
  Flex,
  Link,
} from "@aws-amplify/ui-react";
import { BiBed } from "react-icons/bi";

import { PropertyProps } from "../../types";

export default function PropertyCard({
  name,
  thumbnail,
  thumbnailAlt,
  beds,
  rate,
  rating,
}: PropertyProps) {
  return (
    <Link href="/">
      <Card lineHeight="small">
        <Flex gap="xxs" direction="column">
          {/**
           * 👉 STEP 1
           *
           * Add your image here
           *
           */}
          <Flex alignItems="center">
            {/**
             *
             * 👉 STEP 4
             *
             */}
            <Heading level={2} isTruncated={true}>
              {name}
            </Heading>
            {/**
             *
             * 👉 STEP 2
             *
             */}
          </Flex>
          {/**
           * 👉 STEP 3
           *
           * Your JSX should look something like
           *
           * You can find react icons here https://react-icons.github.io/react-icons/icons?name=bi
           *
           * Flex
           *  icon
           */}
          <View>
            {/**
             * 👉 STEP 5 and STEP 6
             *
             */}
          </View>
        </Flex>
      </Card>
    </Link>
  );
}
