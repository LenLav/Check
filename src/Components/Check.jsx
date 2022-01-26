import '../App.scss';
import React, { useEffect, useState } from 'react';
import { fetchCheck } from '../api/index'
import { IndexFoundCheck} from '../components/foundCheck/index'
import { Header } from './header';
import { FoundCheck } from './foundCheck/foundCheck';
import { NotFoundCheck } from './notFoundCheck';


const Check = () => {

  const response = IndexFoundCheck()
  // console.log("response: ", response)

  if (response === true) {
    return (
      <div className="check-container">
        <Header />
        <FoundCheck />
      </div>
    )
  }

  if (response === false) {
    return (
      <div className="check-container">
        <Header />
        <NotFoundCheck />
      </div>
    )
  }
}

export { Check } 