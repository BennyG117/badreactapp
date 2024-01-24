import React, {useState} from 'react'
import styled from 'styled-components'

export default function LifeCounter() {
const [player1health, setplayer1health] = useState(20);
const [player2health, setplayer2health] = useState(20);








  return (
    <Container>
        <Title>Life counter</Title>
        <Battlefield>
            <Player1>{player1health}</Player1>
            <Player2>{player2health}</Player2>
        </Battlefield>
    </Container>

    //Two players
    //Life totals that can add or subtract
    //Starting Life totals at 20
    //Life counter stops at 0, but can go as high as needed
    //Quick add buttons (+1,+5,+10,+25)
    //Quick minus buttons (-1,-5,-10,-25)
    //? For Later - add poison section

    )
}

// === Styles === //
const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

const Title = styled.h1`
text-align: center;
text-transform: capitalize; // Capitalizes the 1st letter in each word
`

const Battlefield = styled.div`
    font-size: 5rem;
    font-weight: 900;
    background: red;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    
`
const Player1 = styled.div`
    background-color: #1abc9c;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    `
const Player2 = styled.div`
    background-color: #34495e;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
`
const Descendingbutton = styled.button`

`