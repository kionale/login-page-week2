
import { useEffect, useState } from "react"
import { useSearchParams } from 'next/navigation'
import { useRouter } from "next/router"
import CounterStyle from '../styles/Counter.module.css'

export default function Counter() {
    const [number, setNumber] = useState(0);
    const searchParams = useSearchParams();
    const isUser = searchParams.get('username');
    const router = useRouter();

    useEffect(() => {
        !isUser ? router.push('/') : <></>
    }, [isUser])


    return (
        <>
            <main className={CounterStyle.main}>
            <div className={CounterStyle.container}>
            <div className={CounterStyle.title}>COUNTER PAGE</div>
            <div className={CounterStyle.greeting}>Welcome {isUser}</div>
                    <div><span className={CounterStyle.value}>{number}</span> </div>
                   
<div className={counterStyle.buttonSection}>
                    <button className={CounterStyle.button} onClick={() => setNumber(number + 1)}>Increment</button>
                    <button className={CounterStyle.button} onClick={() => setNumber(number - 1)}>Decrement</button>
                    </div>
                    </div>
            </main>
        </>
    )
}