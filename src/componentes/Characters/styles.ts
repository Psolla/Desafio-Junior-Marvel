import styled from "styled-components";

interface ThumbnailData {
    thumbnail: {
        path: string;
        extension: string;
    }
}

export const Container = styled.main`
color: white;
`;

const urlImg = (props: ThumbnailData) => `${props.thumbnail.path}.${props.thumbnail.extension}`;

export const CardList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

`;

export const Card = styled.div`
    background-color: #353333;
    height: 450px;
    width: 350px;
    margin: 10px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 2px 2px 10px 1px rgba(0,0,0,0.3);
    margin-top: 10px;


    h2, p {
        padding: 5px;
        text-align: justify;
    }

    div#img {
        height: 400px;
        width: 100%;
        background: url(${urlImg}) no-repeat center;
        background-size: cover;
        transition: all 1s;
    }

    &:hover {
        div#img {
            height: 200px;
        }
    }

`;

export const ButtonMore = styled.div`
    background: #353333;
    height: 40px;
    cursor: pointer;
    box-shadow: 2px 2px 10px 1px rgba(0,0,0,0.3);
    margin: 20px center;
    text-align: center;
    padding: 0 50px;
    border-radius: 5px;
    transition: 1s;
    display: flex;
    align-items: center;
    justify-content: space-around;

    &:Hover{
        background: #fff;

    }
`;
