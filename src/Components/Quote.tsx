import styled from "styled-components";
interface QuoteProps {
    by: string;
    source: string;
    children: string;
  }
export default function Quote({by, source, children}: QuoteProps){
    return(
      <figure>
        <QuoteContent>
            {children}
        </QuoteContent>
        <figcaption>
            <Author>
                <SourceLink href={source}>
                    {by}
                </SourceLink>
            </Author>
        </figcaption>
      </figure>
    )
}

const QuoteContent = styled.div` 
    padding: 1rem;
    margin: 0;
    background-image: linear-gradient(120deg,#b047ff 16%, #2138b9 , #b047ff);
    color: white;
    border-radius: 0.9rem;
    &:before{
        content: '“';

    }
    &:after{
        content: '”';

    }
`
const Author = styled.cite` 
    display: block;
    text-align: right;
    &:before{
        content: '—';
    }
`

const SourceLink = styled.a`
    color: hsl(0deg 0% 35%);
    a {
        text-decoration: none;
        color: inherit;
    }
`
