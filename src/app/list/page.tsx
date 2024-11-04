import React from "react";

const ListPage = ({ searchParams }: { searchParams: any }) => {
  return <div>{JSON.stringify(searchParams)}</div>;
};

export default ListPage;
