/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function ApplicationItem(props) {
  const { application, overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="row"
      width="991px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="16px 0px 16px 0px"
      {...getOverrideProps(overrides, "ApplicationItem")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(13,26,38,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={application?.createdAt}
        {...getOverrideProps(overrides, "CreatedAt")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(13,26,38,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={application?.status}
        {...getOverrideProps(overrides, "Status")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(13,26,38,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={application?.applicant}
        {...getOverrideProps(overrides, "Applicant")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(48,64,80,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={application?.amount}
        {...getOverrideProps(overrides, "Amount")}
      ></Text>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="small"
        isDisabled={false}
        variation="link"
        children="承認"
        {...getOverrideProps(overrides, "ApproveButton")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="small"
        isDisabled={false}
        variation="link"
        children="却下"
        {...getOverrideProps(overrides, "RejectButton")}
      ></Button>
    </Flex>
  );
}
