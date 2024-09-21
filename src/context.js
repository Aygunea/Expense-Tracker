import React from "react";

const context = React.createContext({
    toggleLayout: () => { },
    openCategory: () => { },
    openType: () => { },
    setCategory: () => { },
    selectCategory: (value) => { },
    selectType: (value) => { },
    addTransaction: () => { },
    showType: false,
    showCategory: false,
    type: null,
    category: null,
    amount: 0,
    transactions: []
})

export default context; 