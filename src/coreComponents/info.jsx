import React from 'react';

function info(itemData) {
  return (
    <div>
        <p>fileName: {itemData.name ? itemData.name : "not found"}</p>
        <p>type: {itemData.type ? itemData.type : "not found"}</p>
        <p>uuid: {itemData.uuid ? itemData.uuid : "not found"}</p>
    </div>
  );
}

export default info;
