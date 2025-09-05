import { lagTilfeldigSetning } from "../utils/lagTilfeldigSetning";
import { sayHello } from "../utils/sayHello";

export default function VippsLogin() {
    return (
        <main>
            <h1>{lagTilfeldigSetning()}</h1>
            <h2>{sayHello("Gløer")}</h2>
            <p>Klikk på riktige ord på mobilen!</p>
        </main>
    );
}