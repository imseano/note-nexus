import { atom } from "jotai";


const counter = atom(0);

const [count, setCounter] = useAtom(counter);