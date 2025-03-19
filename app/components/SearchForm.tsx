 import Form from 'next/form'
import SearchFormReset from './SearchFormReset'

function SearchForm() {
    const query = 'Test'

  return (
    <Form action={'/'} scroll={false} className='search-form'>
        <input type="text" name='query' defaultValue={""} className='search-input' placeholder='Search Startyps'/>

        <div className='flex gap-2'>
            {query && <SearchFormReset/>}
        </div>

    </Form>
  )
}

export default SearchForm