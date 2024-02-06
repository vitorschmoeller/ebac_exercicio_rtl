import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';
import App from '../../App';
describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
});

describe("Testes para simular comentário", () => {
    test("Testando", () => {
    const {debug} = render(<PostComment />)
    fireEvent.change(screen.getByTestId('campo'), {
        target: {
            value: 'testando'
        }
    })
    fireEvent.click(screen.getByTestId('botao'))
    expect(screen.getByText('testando')).toBeInTheDocument();
    debug()

    })

    test("Segundo comentário", () => {
        render(<App />)
        fireEvent.change(screen.getByTestId('campo'), {
            target: {
                value: 'Segundo comentário'
            }
        })
        fireEvent.click(screen.getByTestId("botao"))

        expect(screen.getByText('Segundo comentário')).toBeInTheDocument()
    })
})