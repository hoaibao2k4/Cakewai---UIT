import Link from "next/link";
export default function ClaAndCond(){

    return(
        <div className="mx-4 sm:mx-10 lg:mx-28 my-28 items-center text-black text-primary font-inter">
            <div>
                <Link href="/">Trang chủ </Link>
                <span>&gt;&gt;</span>
                <Link href="/claandcons"> Điều khoản và điều kiện </Link>
            </div>
            <h1 className="font-inter my-4 text-center text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-none text-black">Điều khoản và điều kiện</h1>
            <hr className=" h-[0.75px] bg-black w-1/2 my-4 mx-auto"/> 

            <h3 className="text-base sm:text-lg text-black">Chào mừng bạn đến với CakewaiTown! Chúng tôi mong muốn mang đến cho bạn trải nghiệm mua sắm bánh ngọt tốt nhất với chất lượng sản phẩm cao cấp và dịch vụ tận tâm. Khi truy cập và sử dụng trang web của chúng tôi, bạn đồng ý tuân thủ các điều khoản sau:</h3>
            <ol className="list-decimal ml-7 text-lg sm:text-xl lg:text-2xl my-3 text-black space-y-8">
                <li> 
                    <h2 className="font-bold">Thông Tin Sản Phẩm và Dịch Vụ</h2>
                    <h3>
                        <ul className="list-disc ml-4 sm:ml-6 text-base sm:text-lg space-y-3 mt-3">
                            <li>CakewaiTown cam kết cung cấp thông tin chi tiết về sản phẩm, bao gồm thành phần, mô tả, kích thước và các tùy chọn phục vụ. Mọi thông tin được cập nhật thường xuyên để đảm bảo tính chính xác.</li>
                            <li>Màu sắc và hình ảnh của bánh ngọt có thể khác so với thực tế do điều kiện ánh sáng hoặc màn hình của thiết bị. CakewaiTown sẽ cố gắng hết sức để sản phẩm thực tế đáp ứng được mong đợi của bạn.</li>
                        </ul>
                    </h3>
                </li>

                <li>
                    <h2 className="font-bold">Đặt Hàng và Thanh Toán</h2>
                    <h3>
                        <ul className="list-disc ml-4 sm:ml-6 text-base sm:text-lg space-y-3 mt-3">
                            <li>Bạn có thể đặt hàng trực tiếp thông qua website của chúng tôi. Đơn hàng sẽ chỉ được xác nhận sau khi bạn hoàn tất thanh toán và nhận được email xác nhận từ CakewaiTown.</li>
                            <li>Chúng tôi chấp nhận các hình thức thanh toán phổ biến như thẻ tín dụng, chuyển khoản ngân hàng, hoặc thanh toán khi nhận hàng (COD).</li>
                            <li>CakewaiTown có quyền từ chối hoặc hủy bỏ các đơn hàng bất kỳ lúc nào nếu có dấu hiệu nghi ngờ gian lận hoặc cung cấp thông tin không chính xác.</li>
                        </ul>
                    </h3>
                </li>

                <li>
                    <h2 className="font-bold">Chính Sách Giao Hàng</h2>
                    <h3>
                        <ul className="list-disc ml-4 sm:ml-6 text-base sm:text-lg space-y-3 mt-3">
                            <li>Thời gian giao hàng phụ thuộc vào khu vực và loại sản phẩm mà bạn đã chọn. CakewaiTown sẽ thông báo thời gian dự kiến và cố gắng đáp ứng thời gian giao hàng như cam kết.</li>
                            <li>CakewaiTown miễn phí vận chuyển cho đơn hàng trong bán kính nhất định từ cửa hàng, hoặc áp dụng phí vận chuyển hợp lý dựa trên khoảng cách giao hàng.</li>
                            <li>Trong trường hợp giao hàng trễ hoặc có sự cố, CakewaiTown sẽ thông báo sớm nhất và phối hợp giải quyết để đảm bảo bạn nhận được sản phẩm trong tình trạng tốt nhất.</li>
                        </ul>
                    </h3>
                </li>

                <li>
                    <h2 className="font-bold">Chính Sách Đổi Trả</h2>
                    <h3>
                        <ul className="list-disc ml-4 sm:ml-6 text-base sm:text-lg space-y-3 mt-3">
                            <li>Vì bánh ngọt là sản phẩm thực phẩm, CakewaiTown không áp dụng chính sách đổi trả cho các sản phẩm đã giao trừ trường hợp phát hiện lỗi từ phía CakewaiTown hoặc sản phẩm không đúng như đơn hàng đã đặt.</li>
                            <li>Nếu có vấn đề về chất lượng sản phẩm, vui lòng liên hệ với chúng tôi trong vòng 24 giờ sau khi nhận hàng để được hỗ trợ.</li>
                        </ul>
                    </h3>
                </li>

                <li>
                    <h2 className="font-bold">Bảo Mật Thông Tin Cá Nhân</h2>
                    <h3>
                        <ul className="list-disc ml-4 sm:ml-6 text-base sm:text-lg space-y-3 mt-3">
                            <li>CakewaiTown cam kết bảo mật thông tin cá nhân của khách hàng. Thông tin của bạn sẽ được lưu trữ an toàn và chỉ sử dụng cho mục đích giao hàng, chăm sóc khách hàng và các hoạt động liên quan đến đặt hàng.</li>
                            <li>Chúng tôi không chia sẻ thông tin cá nhân của khách hàng cho bên thứ ba ngoại trừ khi có yêu cầu từ cơ quan pháp luật hoặc theo sự đồng ý từ bạn.</li>
                        </ul>
                    </h3>
                </li>

                <li>
                    <h2 className="font-bold">Điều Khoản Chung</h2>
                    <h3>
                        <ul className="list-disc ml-4 sm:ml-6 text-base sm:text-lg space-y-3 mt-3">
                            <li>CakewaiTown có quyền thay đổi, cập nhật hoặc xóa bỏ bất kỳ điều khoản nào trong "Điều Khoản và Điều Kiện" mà không cần thông báo trước. Việc tiếp tục sử dụng trang web của bạn sau khi có thay đổi đồng nghĩa với việc bạn chấp nhận các điều khoản mới.</li>
                            <li>Mọi tranh chấp phát sinh từ việc sử dụng dịch vụ của CakewaiTown sẽ được giải quyết thông qua thương lượng. Nếu không đạt được thỏa thuận, tranh chấp sẽ được xử lý tại tòa án có thẩm quyền.</li>
                        </ul>
                    </h3>
                </li>
            </ol>
            <hr className=" h-[0.75px] bg-black w-1/2 my-4 mx-auto"/> 
            <h3 className="text-center mt-5 text-black text-base sm:text-lg lg:text-xl italic">Vui lòng đọc kỹ các điều khoản trên. CakewaiTown rất vui khi có cơ hội phục vụ và mang đến cho bạn những chiếc bánh tuyệt vời nhất!</h3>
        </div>
    );
}
