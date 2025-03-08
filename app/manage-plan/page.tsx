import SchematicComponent from '@/components/schematic/SchematicComponent'

function ManagePlan() {
  return (
    <div className='container mx-auto p-4 md:p-0 lg:p-8'>
        <h1 className='text-2xl font-bold mb-4 my-8'>Manage Plan</h1>
        <p className='text-gray-600 mb-8'>
          Manage your subscription and billing details.
        </p>
        <SchematicComponent componentId="cmpn_LJqWdbtCDPn" />
    </div>
  );
}

export default ManagePlan;