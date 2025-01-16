export default function ImageGallery({manager}:any) {
  return (
    <section className="md:flex px-10 gap-4">
      <div className="md:w-2/3">
          <div className="bg-gray-200 h-56 mb-4 flex items-center justify-center">
            <span className="text-gray-500">[ Big Image Placeholder ]</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-gray-200 h-24 flex items-center justify-center">
              <span className="text-gray-500">Img1</span>
            </div>
            <div className="bg-gray-200 h-24 flex items-center justify-center">
              <span className="text-gray-500">Img2</span>
            </div>
            <div className="bg-gray-200 h-24 flex items-center justify-center">
              <span className="text-gray-500">Img3</span>
            </div>
            <div className="bg-gray-200 h-24 flex items-center justify-center">
              <span className="text-gray-500">Img4</span>
            </div>
          </div>
      </div>
      <div className="md:w-1/3">
        <div className="p-6 bg-white shadow-md md:my-6">
          <h3 className="text-lg font-semibold">Mr. {manager}</h3>
          <p className="text-sm text-gray-500 mb-2">MANAGER</p>
          <p className="text-gray-700 mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 
            1500s, when an unknown printer took a galley of type and scrambled it 
            to make a type specimen book.
          </p>
          <p className="text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
      </div>
    </section>
  );
}
