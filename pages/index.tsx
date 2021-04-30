import Head from 'next/head'
import {Button} from '@story/button/Button';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Button label="테스트버튼" backgroundColor="pink" size="small"/>
    <div>test!!!</div>
    </div>
  )
}
