import React from 'react';

function itemDialog(itemData, openFunction, infoFunction, deleteFunction) {
  return (
    <div>
        {
            itemData.type === "folder" ?
            <div class="dropdown">
                <ul>
                    <li>folder</li>
                    <li>open</li>
                    <li>info</li>
                    <li>Delete</li>
                </ul>
            </div> :
            <div class="dropdown">
            <ul>
                <li>file</li>
                <li>info</li>
                <li>Delete</li>
            </ul>
        </div>
        }
    </div>
  );
}

export default itemDialog;
