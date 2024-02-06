import { render, screen } from "@testing-library/react"
import App from "./App"
describe('Testando componente app do react', () => {

    test('testando click do botão', () => {
        render(<App />)
        expect(screen.getByTestId('botao')).toBeInTheDocument
    })

})