/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Application } from "../models";
import { SortDirection } from "@aws-amplify/datastore";
import { getOverrideProps, useDataStoreBinding } from "./utils";
import ApplicationItem from "./ApplicationItem";
import { Collection } from "@aws-amplify/ui-react";
export default function ApplicationItemCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = {
    sort: (s) => s.createdAt(SortDirection.DESCENDING),
  };
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Application,
    pagination: itemsPagination,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      isSearchable={true}
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={6}
      direction="column"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "ApplicationItemCollection")}
      {...rest}
    >
      {(item, index) => (
        <ApplicationItem
          application={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></ApplicationItem>
      )}
    </Collection>
  );
}
