import Head from 'next/head';
import React, { useState } from 'react';
import styles from '@/pages/index.module.css';

export default function Home () {
  const [count, setCount] = useState('');

  function handleChange (event: React.ChangeEvent<HTMLInputElement>) {
    if (parseInt(event.target.value) < 1001) {
      setCount(convertToRoman(parseInt(event.target.value)));
    }
  }

  function convertToRoman (num: number) {
    let numberArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let RomanArr = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let result = [];

    const findElement = (e: number) => {
      return e <= num;
    };

    while (num > 0) {
      let nextHighest: number | undefined = numberArr.find(findElement);

      if (nextHighest) {
        result.push(RomanArr[numberArr.indexOf(nextHighest)]);
        num -= nextHighest;
      }
    }
    return result.join("");
  }

  return (
    <div className={ styles.container }>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <h1 className={ styles.title }>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={ styles.description }>
          Integer to Roman Numeral Calculator
        </p>

        <input name="firstName" onChange={ handleChange }/>
        <p>{ count }</p>
      </main>
    </div>
  );
}
