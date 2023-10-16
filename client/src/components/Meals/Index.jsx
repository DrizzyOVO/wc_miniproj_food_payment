import React from 'react' 

const Index = () => {

    const arr = [{"name": 1}, {"name": 2}, {"name": 3}, {"name": 4}, {"name": 5}, {"name": 6}]; 

  return (
    <div>
        <div className="max-w-screen-xl p-5 mx-auto dark:bg-gray-800 dark:text-gray-100">
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
                    {/* {filtered.map((det) => ( */}
                    {arr.map((no) => {
                        <div key={no.name} className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500 rounded-3xl" style={{backgroundImage: new URL("https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fburger&psig=AOvVaw3V3cs3bKWXxxT7fZDaZLdX&ust=1697464468039000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCOCrrYea-IEDFQAAAAAdAAAAABAD")}} href="#"> 
                            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
                            <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
                                <a rel="noopener noreferrer" href="#" className="px-3 py-2 text-3xl font-semibold tracki uppercase dark:text-gray-100 bgundefined">det.name</a>
                                <div className="flex flex-col justify-start text-center dark:text-gray-100">
                                </div>
                            </div>
                            <h2 className="z-10 p-5">Hello</h2> 
                        </div>
                    })}   
                </div>
            </div>
    </div>
  )
}

export default Index; 