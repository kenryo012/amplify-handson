/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Application } from "../models";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ApplicationItemOverridesProps = {
    ApplicationItem?: PrimitiveOverrideProps<FlexProps>;
    CreatedAt?: PrimitiveOverrideProps<TextProps>;
    Status?: PrimitiveOverrideProps<TextProps>;
    Applicant?: PrimitiveOverrideProps<TextProps>;
    Amount?: PrimitiveOverrideProps<TextProps>;
    ApproveButton?: PrimitiveOverrideProps<ButtonProps>;
    RejectButton?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ApplicationItemProps = React.PropsWithChildren<Partial<FlexProps> & {
    application?: Application;
} & {
    overrides?: ApplicationItemOverridesProps | undefined | null;
}>;
export default function ApplicationItem(props: ApplicationItemProps): React.ReactElement;
