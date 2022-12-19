import { Link } from 'react-router-dom';
const SubMenuInHeader = ({ thisMyImg }) => {
    return (
        <>
            <ol className='bg-white px-0 rounded-3 position-absolute'>
                <li>
                    <Link to='/'><i className='bi bi-phone'></i><p>موبایل</p></Link>
                    <div className='position-absolute d-flex flex-wrap justify-content-center align-content-center'>
                        <Link to='/' className='w-100'><p>همه محصولات موبایل</p><i className='bi bi-chevron-left'></i></Link>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>برندهای مختلف گوشی موبایل</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی اپل</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی سامسونگ</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی شیائومی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی هواوی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی وان پلاس</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی نوکیا</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی موتورولا</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی ال جی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی آنر</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی جی  پلاس</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی جی ال ایکس</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی بلو</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی کاترپیلار</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی ویوو</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی براساس قیمت</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 2 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 5 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 7 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 15 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی بالای 15 میلیون تومان</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی براساس حافظه داخلی</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 16 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 32 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 64 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 128 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 256 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 1 ترابایت</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>رزولوشن عکس</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>تا 13 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 16 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 48 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 64 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 108 مگاپیکسل</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی بر اساس کاربری</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی اقتصادی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی میان رده</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی دانش آموزی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی گیمینگ</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی پرچمدار</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی ضدآب</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی مناسب عکاسی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی 5G</Link>
                            </li>
                            <li>
                                <Link to='/'>دو سیم‌کارت</Link>
                            </li>
                            <li>
                                <Link to='/'>Android (اندروید)</Link>
                            </li>
                            <li>
                                <Link to='/'>IOS</Link>
                            </li>
                            <li>
                                <Link to='/'>سایر سیستم عامل ها</Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to='/'><i className='bi bi-laptop'></i>کالای دیجیتال</Link>
                    <div className='position-absolute d-flex flex-wrap justify-content-center align-content-center'>
                        <Link to='/' className='w-100'><p>همه محصولات کالای دیجیتال</p><i className='bi bi-chevron-left'></i></Link>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>لوازم جانبی گوشی</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>کیف و کاور گوشی</Link>
                            </li>
                            <li>
                                <Link to='/'>پاور بانک (شارژر همراه)</Link>
                            </li>
                            <li>
                                <Link to='/'>پایه نگهدارنده گوشی</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی موبایل</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>اپل</Link>
                            </li>
                            <li>
                                <Link to='/'>سامسونگ</Link>
                            </li>
                            <li>
                                <Link to='/'>هوآوی</Link>
                            </li>
                            <li>
                                <Link to='/'>شیائومی</Link>
                            </li>
                            <li>
                                <Link to='/'>آنر</Link>
                            </li>
                            <li>
                                <Link to='/'>نوکیا</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی براساس حافظه داخلی</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 16 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 32 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 64 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 128 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 256 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 1 ترابایت</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>رزولوشن عکس</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>تا 13 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 16 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 48 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 64 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 108 مگاپیکسل</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی بر اساس کاربری</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی اقتصادی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی میان رده</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی دانش آموزی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی گیمینگ</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی پرچمدار</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی ضدآب</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی مناسب عکاسی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی 5G</Link>
                            </li>
                            <li>
                                <Link to='/'>دو سیم‌کارت</Link>
                            </li>
                            <li>
                                <Link to='/'>Android (اندروید)</Link>
                            </li>
                            <li>
                                <Link to='/'>IOS</Link>
                            </li>
                            <li>
                                <Link to='/'>سایر سیستم عامل ها</Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to='/'><i className='bi bi-tools'></i><p>خودرو,ابزار و تجهیزات صنعتی</p></Link>
                    <div className='position-absolute d-flex flex-wrap justify-content-center align-content-center'>
                        <Link to='/' className='w-100'><p>همه محصولات خودرو، ابزار و تجهیزات صنعتی</p><i className='bi bi-chevron-left'></i></Link>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>برندهای مختلف گوشی موبایل</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی اپل</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی سامسونگ</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی شیائومی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی هواوی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی وان پلاس</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی نوکیا</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی موتورولا</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی ال جی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی آنر</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی جی  پلاس</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی جی ال ایکس</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی بلو</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی کاترپیلار</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی ویوو</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی براساس قیمت</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 2 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 5 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 7 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 15 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی بالای 15 میلیون تومان</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی براساس حافظه داخلی</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 16 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 32 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 64 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 128 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 256 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 1 ترابایت</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>رزولوشن عکس</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>تا 13 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 16 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 48 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 64 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 108 مگاپیکسل</Link>
                            </li>
                        </ul>
                        <ul className='p-0 w-25 h-25'>
                            <li className='border-0 h-25'>
                                <Link to='/' className='d-block h-100'><img src={thisMyImg[0]} className='img-fluid' alt='ronix' /></Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to='/'><i className='bi bi-bag'></i><p>مد و پوشاک</p></Link>
                    <div className='position-absolute d-flex flex-wrap justify-content-center align-content-center'>
                        <Link to='/' className='w-100'><p>همه محصولات مد و پوشاک</p><i className='bi bi-chevron-left'></i></Link>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>برندهای مختلف گوشی موبایل</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی اپل</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی سامسونگ</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی شیائومی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی هواوی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی وان پلاس</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی نوکیا</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی موتورولا</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی ال جی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی آنر</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی جی  پلاس</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی جی ال ایکس</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی بلو</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی کاترپیلار</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی ویوو</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی براساس قیمت</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 2 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 5 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 7 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 15 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی بالای 15 میلیون تومان</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی براساس حافظه داخلی</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 16 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 32 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 64 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 128 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 256 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 1 ترابایت</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>رزولوشن عکس</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>تا 13 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 16 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 48 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 64 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 108 مگاپیکسل</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی بر اساس کاربری</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی اقتصادی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی میان رده</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی دانش آموزی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی گیمینگ</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی پرچمدار</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی ضدآب</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی مناسب عکاسی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی 5G</Link>
                            </li>
                            <li>
                                <Link to='/'>دو سیم‌کارت</Link>
                            </li>
                            <li>
                                <Link to='/'>Android (اندروید)</Link>
                            </li>
                            <li>
                                <Link to='/'>IOS</Link>
                            </li>
                            <li>
                                <Link to='/'>سایر سیستم عامل ها</Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to='/'><i className='bi bi-basket2'></i><p>کالاهای سوپرمارکتی</p></Link>
                    <div className='position-absolute d-flex flex-wrap justify-content-center align-content-center'>
                        <Link to='/' className='w-100'><p>همه محصولات کالاهای سوپرمارکتی</p><i className='bi bi-chevron-left'></i></Link>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>برندهای مختلف گوشی موبایل</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی اپل</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی سامسونگ</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی شیائومی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی هواوی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی وان پلاس</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی نوکیا</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی موتورولا</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی ال جی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی آنر</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی جی  پلاس</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی جی ال ایکس</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی بلو</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی کاترپیلار</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی ویوو</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی براساس قیمت</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 2 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 5 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 7 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 15 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی بالای 15 میلیون تومان</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی براساس حافظه داخلی</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 16 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 32 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 64 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 128 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 256 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 1 ترابایت</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>رزولوشن عکس</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>تا 13 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 16 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 48 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 64 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 108 مگاپیکسل</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی بر اساس کاربری</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی اقتصادی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی میان رده</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی دانش آموزی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی گیمینگ</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی پرچمدار</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی ضدآب</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی مناسب عکاسی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی 5G</Link>
                            </li>
                            <li>
                                <Link to='/'>دو سیم‌کارت</Link>
                            </li>
                            <li>
                                <Link to='/'>Android (اندروید)</Link>
                            </li>
                            <li>
                                <Link to='/'>IOS</Link>
                            </li>
                            <li>
                                <Link to='/'>سایر سیستم عامل ها</Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to='/'><i className='bi bi-xbox'></i><p>اسباب بازی,کودک و نوزاد</p></Link>
                    <div className='position-absolute d-flex flex-wrap justify-content-center align-content-center'>
                        <Link to='/' className='w-100'><p>همه محصولات اسباب بازی، کودک و نوزا</p><i className='bi bi-chevron-left'></i></Link>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>برندهای مختلف گوشی موبایل</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی اپل</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی سامسونگ</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی شیائومی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی هواوی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی وان پلاس</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی نوکیا</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی موتورولا</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی ال جی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی آنر</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی جی  پلاس</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی جی ال ایکس</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی بلو</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی کاترپیلار</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی ویوو</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی براساس قیمت</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 2 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 5 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 7 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 15 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی بالای 15 میلیون تومان</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی براساس حافظه داخلی</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 16 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 32 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 64 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 128 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 256 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 1 ترابایت</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>رزولوشن عکس</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>تا 13 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 16 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 48 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 64 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 108 مگاپیکسل</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی بر اساس کاربری</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی اقتصادی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی میان رده</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی دانش آموزی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی گیمینگ</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی پرچمدار</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی ضدآب</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی مناسب عکاسی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی 5G</Link>
                            </li>
                            <li>
                                <Link to='/'>دو سیم‌کارت</Link>
                            </li>
                            <li>
                                <Link to='/'>Android (اندروید)</Link>
                            </li>
                            <li>
                                <Link to='/'>IOS</Link>
                            </li>
                            <li>
                                <Link to='/'>سایر سیستم عامل ها</Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to='/'><i className='bi bi-flower3'></i><p>محصولات بومی و محلی</p></Link>
                    <div className='position-absolute d-flex flex-wrap justify-content-center align-content-center'>
                        <Link to='/' className='w-100'><p>همه محصولات محصولات بومی و محلی</p><i className='bi bi-chevron-left'></i></Link>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>برندهای مختلف گوشی موبایل</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی اپل</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی سامسونگ</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی شیائومی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی هواوی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی وان پلاس</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی نوکیا</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی موتورولا</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی ال جی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی آنر</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی جی  پلاس</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی جی ال ایکس</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی بلو</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی کاترپیلار</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی ویوو</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی براساس قیمت</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 2 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 5 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 7 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 15 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی بالای 15 میلیون تومان</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی براساس حافظه داخلی</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 16 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 32 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 64 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 128 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 256 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 1 ترابایت</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>رزولوشن عکس</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>تا 13 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 16 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 48 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 64 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 108 مگاپیکسل</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی بر اساس کاربری</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی اقتصادی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی میان رده</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی دانش آموزی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی گیمینگ</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی پرچمدار</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی ضدآب</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی مناسب عکاسی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی 5G</Link>
                            </li>
                            <li>
                                <Link to='/'>دو سیم‌کارت</Link>
                            </li>
                            <li>
                                <Link to='/'>Android (اندروید)</Link>
                            </li>
                            <li>
                                <Link to='/'>IOS</Link>
                            </li>
                            <li>
                                <Link to='/'>سایر سیستم عامل ها</Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to='/'><i className='bi bi-balloon-heart'></i><p>زیبایی و سلامت</p></Link>
                    <div className='position-absolute d-flex flex-wrap justify-content-center align-content-center'>
                        <Link to='/' className='w-100'><p>همه محصولات زیبایی و سلامت</p><i className='bi bi-chevron-left'></i></Link>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>برندهای مختلف گوشی موبایل</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی اپل</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی سامسونگ</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی شیائومی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی هواوی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی وان پلاس</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی نوکیا</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی موتورولا</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی ال جی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی آنر</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی جی  پلاس</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی جی ال ایکس</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی بلو</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی کاترپیلار</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی ویوو</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی براساس قیمت</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 2 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 5 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 7 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 15 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی بالای 15 میلیون تومان</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی براساس حافظه داخلی</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 16 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 32 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 64 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 128 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 256 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 1 ترابایت</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>رزولوشن عکس</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>تا 13 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 16 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 48 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 64 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 108 مگاپیکسل</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی بر اساس کاربری</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی اقتصادی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی میان رده</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی دانش آموزی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی گیمینگ</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی پرچمدار</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی ضدآب</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی مناسب عکاسی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی 5G</Link>
                            </li>
                            <li>
                                <Link to='/'>دو سیم‌کارت</Link>
                            </li>
                            <li>
                                <Link to='/'>Android (اندروید)</Link>
                            </li>
                            <li>
                                <Link to='/'>IOS</Link>
                            </li>
                            <li>
                                <Link to='/'>سایر سیستم عامل ها</Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to='/'><i className='bi bi-house-heart'></i><p>خانه و آشپزخانه</p></Link>
                    <div className='position-absolute d-flex flex-wrap justify-content-center align-content-center'>
                        <Link to='/' className='w-100'><p>همه محصولات خانه و آشپزخانه</p><i className='bi bi-chevron-left'></i></Link>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>برندهای مختلف گوشی موبایل</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی اپل</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی سامسونگ</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی شیائومی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی هواوی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی وان پلاس</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی نوکیا</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی موتورولا</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی ال جی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی آنر</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی جی  پلاس</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی جی ال ایکس</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی بلو</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی کاترپیلار</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی ویوو</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی براساس قیمت</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 2 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 5 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 7 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 15 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی بالای 15 میلیون تومان</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی براساس حافظه داخلی</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 16 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 32 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 64 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 128 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 256 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 1 ترابایت</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>رزولوشن عکس</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>تا 13 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 16 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 48 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 64 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 108 مگاپیکسل</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی بر اساس کاربری</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی اقتصادی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی میان رده</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی دانش آموزی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی گیمینگ</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی پرچمدار</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی ضدآب</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی مناسب عکاسی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی 5G</Link>
                            </li>
                            <li>
                                <Link to='/'>دو سیم‌کارت</Link>
                            </li>
                            <li>
                                <Link to='/'>Android (اندروید)</Link>
                            </li>
                            <li>
                                <Link to='/'>IOS</Link>
                            </li>
                            <li>
                                <Link to='/'>سایر سیستم عامل ها</Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to='/'><i className='bi bi-book'></i><p>کتاب,لوازم نحریر و هنر</p></Link>
                    <div className='position-absolute d-flex flex-wrap justify-content-center align-content-center'>
                        <Link to='/' className='w-100'><p>همه محصولات کتاب، لوازم تحریر و هنر</p><i className='bi bi-chevron-left'></i></Link>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>برندهای مختلف گوشی موبایل</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی اپل</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی سامسونگ</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی شیائومی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی هواوی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی وان پلاس</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی نوکیا</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی موتورولا</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی ال جی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی آنر</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی جی  پلاس</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی جی ال ایکس</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی بلو</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی کاترپیلار</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی ویوو</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی براساس قیمت</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 2 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 5 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 7 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 15 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی بالای 15 میلیون تومان</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی براساس حافظه داخلی</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 16 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 32 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 64 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 128 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 256 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 1 ترابایت</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>رزولوشن عکس</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>تا 13 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 16 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 48 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 64 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 108 مگاپیکسل</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی بر اساس کاربری</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی اقتصادی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی میان رده</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی دانش آموزی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی گیمینگ</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی پرچمدار</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی ضدآب</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی مناسب عکاسی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی 5G</Link>
                            </li>
                            <li>
                                <Link to='/'>دو سیم‌کارت</Link>
                            </li>
                            <li>
                                <Link to='/'>Android (اندروید)</Link>
                            </li>
                            <li>
                                <Link to='/'>IOS</Link>
                            </li>
                            <li>
                                <Link to='/'>سایر سیستم عامل ها</Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to='/'><i className='bi bi-airplane'></i><p>ورزش و سفر</p></Link>
                    <div className='position-absolute d-flex flex-wrap justify-content-center align-content-center'>
                        <Link to='/' className='w-100'><p>همه محصولات ورزش و سفر</p><i className='bi bi-chevron-left'></i></Link>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>برندهای مختلف گوشی موبایل</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی اپل</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی سامسونگ</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی شیائومی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی هواوی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی وان پلاس</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی نوکیا</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی موتورولا</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی ال جی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی آنر</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی جی  پلاس</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی جی ال ایکس</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی بلو</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی کاترپیلار</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی ویوو</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی براساس قیمت</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 2 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 5 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 7 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 15 میلیون تومان</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی بالای 15 میلیون تومان</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی براساس حافظه داخلی</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 16 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 32 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 64 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 128 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 256 گیگابایت</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی تا 1 ترابایت</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>رزولوشن عکس</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>تا 13 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 16 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 48 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 64 مگاپیکسل</Link>
                            </li>
                            <li>
                                <Link to='/'>تا 108 مگاپیکسل</Link>
                            </li>
                        </ul>
                        <ul className='p-0'>
                            <li>
                                <Link to='/'><p>گوشی بر اساس کاربری</p><i className='bi bi-chevron-left'></i></Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی اقتصادی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی میان رده</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی دانش آموزی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی گیمینگ</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی پرچمدار</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی ضدآب</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی مناسب عکاسی</Link>
                            </li>
                            <li>
                                <Link to='/'>گوشی 5G</Link>
                            </li>
                            <li>
                                <Link to='/'>دو سیم‌کارت</Link>
                            </li>
                            <li>
                                <Link to='/'>Android (اندروید)</Link>
                            </li>
                            <li>
                                <Link to='/'>IOS</Link>
                            </li>
                            <li>
                                <Link to='/'>سایر سیستم عامل ها</Link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ol>
        </>
    );
}
export default SubMenuInHeader;