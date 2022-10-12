import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaulLayout'
import { CheckOut } from './pages/CheckOut'
import { Home } from './pages/Home'
import { Success } from './pages/Success'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/CheckOut" element={<CheckOut />}></Route>
        <Route path="Success" element={<Success />}></Route>
      </Route>
    </Routes>
  )
}
