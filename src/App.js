import { useState, useEffect } from "react"
import AddTransaction from "./Components/AddTransaction"
import Container from "./Components/Container"
import Layout from "./Components/Layout"
import Context from "./context"

const App = () => {
  const [showLayout, setShowLayout] = useState(true)
  const [showType, setShowType] = useState(false)
  const [category, setCategory] = useState(null)
  const [showCategory, setShowCategory] = useState(false)
  const [type, setType] = useState(null)
  const [transactions, setTransactions] = useState([])

  useEffect(() => {
    if (transactions?.length > 0) {
      localStorage.setItem("transactions", JSON.stringify(transactions))
    }
  }, [transactions])

  useEffect(() => {
    const fetchedTransactions = JSON.parse(localStorage.getItem("transactions")) || []
    setTransactions(fetchedTransactions)
  },[])

  const toggleLayout = () => {
    setShowLayout(!showLayout)
    setShowType(false)
    setShowCategory(false)
    setType(null)
    selectCategory(null)
  }
  const openType = () => {
    setShowType(!showType)
    setShowCategory(false)
  }
  const selectType = (value) => {
    setType(value)
    setShowType(false)
  }

  const openCategory = () => {
    setShowCategory(!showCategory)
    setShowType(false)
  }
  const selectCategory = (value) => {
    setCategory(value)
    setShowCategory(false)
  }

  const addTransaction = (transaction) => {
    const newTransaction = [...transactions, transaction]
    setTransactions(newTransaction)
    setType(null)
    setCategory(null)
    setShowLayout(true)
  }

  return (
    <Container>
      <Context.Provider value={{
        toggleLayout: toggleLayout,
        openType: openType,
        selectType: selectType,
        showType: showType,
        type: type,
        category: category,
        showCategory: showCategory,
        openCategory: openCategory,
        selectCategory: selectCategory,
        addTransaction: addTransaction,
        transactions: transactions,
        setCategory: setCategory,
        amount: 0,
      }}>
        <div className="flex flex-col h-[600px] w-[350px] rounded-3xl bg-[#EDE9F0] pt-10 px-5 font-lato ">
          {showLayout && <Layout />}
          {!showLayout && <AddTransaction />}
        </div>
      </Context.Provider>
    </Container>
  )
}

export default App