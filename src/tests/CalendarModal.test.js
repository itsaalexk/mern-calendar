import { render } from '@testing-library/react'
import {Modal} from 'react-modal'



test('Text should be in the document',()=>{
    const {getByText} = render(
        <h1> Nuevo evento </h1>
    )
    expect(getByText('Nuevo evento')).toBeInTheDocument()
})