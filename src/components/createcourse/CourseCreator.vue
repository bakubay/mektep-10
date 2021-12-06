<template>
  <div class="flex">
    <div class="flex flex-col w-full min-h-full py-2 my-4">
      <div class="text-xl font-bold text-center mb-2">Enter course information</div>
      <form action="" method="post">
        <div class="flex flex-col border-2 shadow-md px-10 h-auto py-4">
          <h1 class="text-gray-500"></h1>
          <div class="flex items-center">
            <div class="w-full flex py-3 items-center space-x-2">
              <label class="font-semibold leading-none w-1/6">Course Name</label>
              <input type="text" class="flex-1 leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 bg-gray-100 border rounded border-gray-200" />
            </div>
          </div>
          <div class="flex items-center">
            <div class="w-full flex py-3 items-center space-x-2">
              <label class="font-semibold leading-none w-1/6">Image</label>
              <input type="text" class="flex-1 leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 bg-gray-100 border rounded border-gray-200" />
            </div>
          </div>
          <div class="flex items-center">
            <div class="w-full flex space-x-2 pt-3">
              <label class="font-semibold leading-none w-1/6">Category</label>
              <input type="text" class="flex-1 leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 bg-gray-100 border rounded border-gray-200" />
            </div>
          </div>
          <div class="flex items-center">
            <div class="w-full flex space-x-2 pt-3">
              <label class="font-semibold leading-none w-1/6">Description</label>
              <textarea
                type="text"
                name="course-description"
                rows="5"
                cols="30"
                class="flex-1 leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 bg-gray-100 border rounded border-gray-200"
              ></textarea>
            </div>
          </div>

          <div class="flex items-center w-full justify-end space-x-1">
            <button @click="onSumbitSection" class="mt-4 leading-none py-4 px-10 bg-gray-300 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
              Cancel
            </button>
            <button
              @click="onSumbitSection"
              class="mt-4 font-semibold leading-none text-white py-4 px-10 bg-green-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
            >
              Save
            </button>
          </div>
        </div>
      </form>
      <div class="flex mt-4 w-full justify-between">
        <button @click="onSumbit" class="p-3 w-32 bg-green-500 hover:bg-green-300 rounded">Create</button>
      </div>
    </div>
  </div>
</template>
