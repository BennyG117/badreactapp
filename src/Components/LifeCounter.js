import React, {useState} from 'react'
import styled from 'styled-components'

export default function LifeCounter() {
const [player1health, setplayer1health] = useState(20);
const [player2health, setplayer2health] = useState(20);



  return (
    <Container>
        <Title>Life counter</Title>
        <Battlefield>
            <Player1>
                <p>{player1health}</p>
                <AescendingButton onClick={() => setplayer1health(player1health +1)}/>
                <DescendingButton onClick={() => setplayer1health(player1health -1)}/>
                <AddFive onClick={() => setplayer1health(player1health +5)}>+5</AddFive>
            </Player1>
            <Player2>{player2health}
                <AescendingButton onClick={() => setplayer2health(player2health +1)}/>
                <DescendingButton onClick={() => setplayer2health(player2health -1)}/>
                <AddFive onClick={() => setplayer2health(player2health +5)}>+5</AddFive>
            </Player2>
        </Battlefield>
    </Container>

    //Quick add buttons (+5)
    //Quick minus buttons (-1,-5,-10,-25)
    //reset button
    //Manual Change button amount - tap, type, set
    //have playter choose background color
    //
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
    flex-direction: column;
    
`
const Player1 = styled.div`
    background-color: #1abc9c;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    position: relative;
    `
const Player2 = styled.div`
    background-color: #34495e;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    position: relative;
    `

const DescendingButton = styled.button`
    position: absolute;
    cursor: pointer;
    width: 100%;
    height: 50%;
    bottom: 0;
    opacity: 0%;
    &:active{
        opacity: 10%;
    }
    `
const AescendingButton = styled.button`
    position: absolute;
    cursor: pointer;
    width: 100%;
    height: 50%;
    top: 0;
    opacity:0%;
    &:active{
        opacity: 10%;
    }
`
const AddFive = styled.button`
    position: absolute;
    right: 0;
    top: 0;
    font-size: 5rem;
    border-radius: 25%;
    margin: 1rem;

`