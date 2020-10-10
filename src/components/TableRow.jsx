import React from 'react'

function TableRow(props) {
    return (
        <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
             <dt className={"text-sm leading-5 font-medium text-gray-700 " + props.class1}>{props.text1}</dt>
             <dd className={"mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2 " + props.class2}>{props.text2}</dd>
        </div>
    );
  }

  export default TableRow;