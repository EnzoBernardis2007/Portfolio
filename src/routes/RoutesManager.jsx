import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import { Initial } from '../pages/Initial'
import { Contact } from '../pages/Contact';

export function RoutesManager() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Initial />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}