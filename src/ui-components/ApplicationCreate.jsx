/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useStateMutationAction,
} from "./utils";
import { Application } from "../models";
import { schema } from "../models/schema";
import { Button, Flex, TextField } from "@aws-amplify/ui-react";
export default function ApplicationCreate(props) {
  const { overrides, ...rest } = props;
  const [
    textFieldThreeEightEightOneSixOneSixValue,
    setTextFieldThreeEightEightOneSixOneSixValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeEightEightOneSixSixThreeValue,
    setTextFieldThreeEightEightOneSixSixThreeValue,
  ] = useStateMutationAction("");
  const buttonOnClick = useDataStoreCreateAction({
    fields: {
      applicant: textFieldThreeEightEightOneSixOneSixValue,
      amount: textFieldThreeEightEightOneSixSixThreeValue,
      status: "APPLYING",
    },
    model: Application,
    schema: schema,
  });
  return (
    <Flex
      gap="0"
      direction="column"
      width="983px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="80px 80px 80px 80px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "ApplicationCreate")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        borderRadius="8px"
        padding="32px 32px 32px 32px"
        backgroundColor="rgba(250,250,250,1)"
        {...getOverrideProps(overrides, "ContactUs")}
      >
        <TextField
          width="unset"
          height="unset"
          label="申請者名"
          shrink="0"
          alignSelf="stretch"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldThreeEightEightOneSixOneSixValue}
          onChange={(event) => {
            setTextFieldThreeEightEightOneSixOneSixValue(event.target.value);
          }}
          {...getOverrideProps(overrides, "TextField3881616")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="申請金額"
          shrink="0"
          alignSelf="stretch"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          value={textFieldThreeEightEightOneSixSixThreeValue}
          onChange={(event) => {
            setTextFieldThreeEightEightOneSixSixThreeValue(event.target.value);
          }}
          {...getOverrideProps(overrides, "TextField3881663")}
        ></TextField>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          alignSelf="stretch"
          size="large"
          isDisabled={false}
          variation="primary"
          children="送信"
          onClick={() => {
            buttonOnClick();
          }}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
