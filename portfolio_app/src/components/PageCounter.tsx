import { styled } from "styled-components";

const Page = styled.div`
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 1;

    width: 60px;
    height: 60px;
    background: #111;
    color: var(--whiteC);
    border-radius: 5px 0 0 0;

    display: flex;
    align-items: center;
    justify-content: center;
`

const PageCounter = ({ page }: { page: number }) => {
    return(
        <Page>
            <h2 className="counter">{page}</h2>
        </Page>
    )
}

export default PageCounter;
