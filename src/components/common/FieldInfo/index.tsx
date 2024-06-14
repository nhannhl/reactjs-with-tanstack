function FieldInfo({ field }: { field: any }) {
  return (
    <>
      {field?.state?.meta?.isValidating ? 'Validating...' : null}
      {field?.state?.meta?.errors ? (<span className='text-red-500'>{field.state.meta.errors.join(', ')}</span>) : null}
    </>
  )
}

export default FieldInfo;