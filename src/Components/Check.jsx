import '../App.scss';
import React, { useEffect, useState } from 'react';
import { fetchCheck } from '../api/index'

import { useParams } from 'react-router-dom';

import { Header } from './header';
import { FoundCheck } from './foundCheck/foundCheck';
import { NotFoundCheck } from './notFoundCheck';


const Check = () => {
  const id = useParams().id

  useEffect(() => {
    const fetch = async () => {
      const response = await fetchCheck(id);

      if (response === "error") {
        document.getElementById('success').hidden = true
        document.getElementById('error').hidden = false
        return
      }
      else {
        document.getElementById('success').hidden = false
        document.getElementById('error').hidden = true
      }
    }
    fetch();
  }, [])


  return (
    <div className="check-container">

      <Header />

      <div id='success' hidden>
        <FoundCheck />
      </div>

      <div id='error' hidden>
        <NotFoundCheck />
      </div>

    </div>
  );
}

export { Check } 