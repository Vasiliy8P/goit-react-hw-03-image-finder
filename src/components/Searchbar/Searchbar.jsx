import { Formik, Form, Field } from 'formik';
import { FaSearch } from 'react-icons/fa';
import './Searchbar.css';

const Searchbar = ({onSubmit}) => {
    const handleSubmit = (values, actions) => {
        onSubmit(values.value)
    }

    return (
        <header className="Searchbar">
            <Formik
                initialValues={{ value: '' }}
                onSubmit={handleSubmit}
            >
                <Form className="SearchForm">
                    <button type="submit" className="SearchForm-button">
                        <FaSearch style={{width: "30", height: "30"}} />
                    </button>

                    <Field
                        name="value"
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </Form>
            </Formik>            
        </header>
    )
}

export default Searchbar;