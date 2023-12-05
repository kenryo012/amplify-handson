/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ApplicationCreateOverridesProps = {
    ApplicationCreate?: PrimitiveOverrideProps<FlexProps>;
    ContactUs?: PrimitiveOverrideProps<FlexProps>;
    TextField3859593?: PrimitiveOverrideProps<TextFieldProps>;
    TextField3859639?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ApplicationCreateProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ApplicationCreateOverridesProps | undefined | null;
}>;
export default function ApplicationCreate(props: ApplicationCreateProps): React.ReactElement;
