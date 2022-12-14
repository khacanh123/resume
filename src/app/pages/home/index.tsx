import './styles.css'
const HomePage = () => {
  return (
    <>
      {/*begin::Main*/}
      <div className='d-flex flex-column flex-root'>
        {/*begin::Header Section*/}
        <div className='mb-0' id='home'>
          {/*begin::Wrapper*/}
          <div
            className='bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom landing-dark-bg'
            style={{
              backgroundImage: 'url(media/svg/illustrations/landing.svg)',
            }}
          >
            {/*begin::Header*/}
            <div
              className='landing-header'
              data-kt-sticky='true'
              data-kt-sticky-name='landing-header'
              data-kt-sticky-offset="{default: '200px', lg: '300px'}"
            >
              {/*begin::Container*/}
              <div className='container'>
                {/*begin::Wrapper*/}
                <div className='d-flex align-items-center justify-content-between'>
                  {/*begin::Logo*/}
                  <div className='d-flex align-items-center flex-equal'>
                    {/*begin::Mobile menu toggle*/}
                    <button
                      className='btn btn-icon btn-active-color-primary me-3 d-flex d-lg-none'
                      id='kt_landing_menu_toggle'
                    >
                      {/*begin::Svg Icon | path: icons/duotone/Text/Menu.svg*/}
                      <span className='svg-icon svg-icon-2hx'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          xmlnsXlink='http://www.w3.org/1999/xlink'
                          width='24px'
                          height='24px'
                          viewBox='0 0 24 24'
                          version='1.1'
                        >
                          <g stroke='none' strokeWidth={1} fill='none' fillRule='evenodd'>
                            <rect x={0} y={0} width={24} height={24} />
                            <rect fill='#000000' x={4} y={5} width={16} height={3} rx='1.5' />
                            <path
                              d='M5.5,15 L18.5,15 C19.3284271,15 20,15.6715729 20,16.5 C20,17.3284271 19.3284271,18 18.5,18 L5.5,18 C4.67157288,18 4,17.3284271 4,16.5 C4,15.6715729 4.67157288,15 5.5,15 Z M5.5,10 L18.5,10 C19.3284271,10 20,10.6715729 20,11.5 C20,12.3284271 19.3284271,13 18.5,13 L5.5,13 C4.67157288,13 4,12.3284271 4,11.5 C4,10.6715729 4.67157288,10 5.5,10 Z'
                              fill='#000000'
                              opacity='0.3'
                            />
                          </g>
                        </svg>
                      </span>
                      {/*end::Svg Icon*/}
                    </button>
                    {/*end::Mobile menu toggle*/}
                    {/*begin::Logo image*/}
                    <a href='../../demo1/dist/landing.html'>
                      <img
                        alt='Logo'
                        src='media/logos/logo-landing.svg'
                        className='logo-default h-25px h-lg-30px'
                      />
                      <img
                        alt='Logo'
                        src='media/logos/logo-landing-dark.svg'
                        className='logo-sticky h-20px h-lg-25px'
                      />
                    </a>
                    {/*end::Logo image*/}
                  </div>
                  {/*end::Logo*/}
                  {/*begin::Menu wrapper*/}
                  <div className='d-lg-block' id='kt_header_nav_wrapper'>
                    <div
                      className='d-lg-block p-5 p-lg-0'
                      data-kt-drawer='true'
                      data-kt-drawer-name='landing-menu'
                      data-kt-drawer-activate='{default: true, lg: false}'
                      data-kt-drawer-overlay='true'
                      data-kt-drawer-width='200px'
                      data-kt-drawer-direction='start'
                      data-kt-drawer-toggle='#kt_landing_menu_toggle'
                      data-kt-swapper='true'
                      data-kt-swapper-mode='prepend'
                      data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav_wrapper'}"
                    >
                      {/*begin::Menu*/}
                      <div
                        className='menu menu-column flex-nowrap menu-rounded menu-lg-row menu-title-gray-500 menu-state-title-primary nav nav-flush fs-5 fw-bold'
                        id='kt_landing_menu'
                      >
                        {/*begin::Menu item*/}
                        <div className='menu-item'>
                          {/*begin::Menu link*/}
                          <a
                            className='menu-link nav-link active py-3 px-4 px-xxl-6'
                            href='#kt_body'
                            data-kt-scroll-toggle='true'
                            data-kt-drawer-dismiss='true'
                          >
                            Home
                          </a>
                          {/*end::Menu link*/}
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className='menu-item'>
                          {/*begin::Menu link*/}
                          <a
                            className='menu-link nav-link py-3 px-4 px-xxl-6'
                            href='#how-it-works'
                            data-kt-scroll-toggle='true'
                            data-kt-drawer-dismiss='true'
                          >
                            How it Works
                          </a>
                          {/*end::Menu link*/}
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className='menu-item'>
                          {/*begin::Menu link*/}
                          <a
                            className='menu-link nav-link py-3 px-4 px-xxl-6'
                            href='#achievements'
                            data-kt-scroll-toggle='true'
                            data-kt-drawer-dismiss='true'
                          >
                            Achievements
                          </a>
                          {/*end::Menu link*/}
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className='menu-item'>
                          {/*begin::Menu link*/}
                          <a
                            className='menu-link nav-link py-3 px-4 px-xxl-6'
                            href='#team'
                            data-kt-scroll-toggle='true'
                            data-kt-drawer-dismiss='true'
                          >
                            Team
                          </a>
                          {/*end::Menu link*/}
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className='menu-item'>
                          {/*begin::Menu link*/}
                          <a
                            className='menu-link nav-link py-3 px-4 px-xxl-6'
                            href='#portfolio'
                            data-kt-scroll-toggle='true'
                            data-kt-drawer-dismiss='true'
                          >
                            Portfolio
                          </a>
                          {/*end::Menu link*/}
                        </div>
                        {/*end::Menu item*/}
                        {/*begin::Menu item*/}
                        <div className='menu-item'>
                          {/*begin::Menu link*/}
                          <a
                            className='menu-link nav-link py-3 px-4 px-xxl-6'
                            href='#pricing'
                            data-kt-scroll-toggle='true'
                            data-kt-drawer-dismiss='true'
                          >
                            Pricing
                          </a>
                          {/*end::Menu link*/}
                        </div>
                        {/*end::Menu item*/}
                      </div>
                      {/*end::Menu*/}
                    </div>
                  </div>
                  {/*end::Menu wrapper*/}
                  {/*begin::Toolbar*/}
                  <div className='flex-equal text-end ms-1'>
                    <a
                      href='../../demo1/dist/authentication/flows/basic/sign-in.html'
                      className='btn btn-success'
                    >
                      Sign In
                    </a>
                  </div>
                  {/*end::Toolbar*/}
                </div>
                {/*end::Wrapper*/}
              </div>
              {/*end::Container*/}
            </div>
            {/*end::Header*/}
            {/*begin::Landing hero*/}
            <div className='d-flex flex-column flex-center w-100 min-h-350px min-h-lg-500px px-9 '>
              {/*begin::Heading*/}

              <div className='container row'>
                <div className='col-md-8'>
                  <h1 className='text-white lh-base fw-bolder fs-2x fs-lg-5x mb-15'>
                    Hi,
                    <br />
                    Mình là{' '}
                    <span
                      style={{
                        background: 'linear-gradient(to right, #12CE5D 0%, #FFD80C 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      <span id='kt_landing_hero_text'>Khắc Anh</span>
                    </span>
                    ,
                    <br />
                    Web Developer
                  </h1>
                </div>
                <div className='col-md-4'>
                  <div className='row'>
                    {/*begin::Client*/}
                    <div className='col-md-6 mb-4 col-6' data-bs-toggle='tooltip' title='Fujifilm'>
                      <div className='d-flex flex-center flex-col'>
                        <p
                          style={{
                            marginBottom: 2,
                            color: '#fff',
                            fontWeight: 'bold',
                            textAlign: 'center',
                          }}
                        >
                          REACTJS
                        </p>
                        <div className='d-flex flex-center '>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            aria-hidden='true'
                            role='img'
                            width='40'
                            height='40'
                            fill='#ffff'
                            preserveAspectRatio='xMidYMid meet'
                            viewBox='0 0 512 512'
                          >
                            <path
                              fill='#ffff'
                              d='M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1c.9-3.7 1.7-7.4 2.5-11.1c12.3-59.6 4.2-107.5-23.1-123.3c-26.3-15.1-69.2.6-112.6 38.4c-4.3 3.7-8.5 7.6-12.5 11.5c-2.7-2.6-5.5-5.2-8.3-7.7c-45.5-40.4-91.1-57.4-118.4-41.5c-26.2 15.2-34 60.3-23 116.7c1.1 5.6 2.3 11.1 3.7 16.7c-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5c4.5 1.5 9 3 13.6 4.3c-1.5 6-2.8 11.9-4 18c-10.5 55.5-2.3 99.5 23.9 114.6c27 15.6 72.4-.4 116.6-39.1c3.5-3.1 7-6.3 10.5-9.7c4.4 4.3 9 8.4 13.6 12.4c42.8 36.8 85.1 51.7 111.2 36.6c27-15.6 35.8-62.9 24.4-120.5c-.9-4.4-1.9-8.9-3-13.5c3.2-.9 6.3-1.9 9.4-2.9c57.7-19.1 99.5-50 99.5-81.7c0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36c16.9 9.7 23.4 48.9 12.8 100.4c-.7 3.4-1.4 6.7-2.3 10c-22.2-5-44.7-8.6-67.3-10.6c-13-18.6-27.2-36.4-42.6-53.1c3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9c-15.6-1.7-31.1-4.2-46.4-7.5c4.4-14.4 9.9-29.3 16.3-44.5c4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8c-5.3 8.3-10.5 16.8-15.4 25.4c-4.9 8.5-9.7 17.2-14.2 26c-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8c-7.6 13.3-15.7 26.2-24.2 39c-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7c6.4 14.5 12 29.2 16.9 44.3c-15.5 3.5-31.2 6.2-47 8c5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2c-4.9-8.5-10-16.9-15.3-25.2c16.1 2 31.5 4.7 45.9 8c-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8c-19.8-.9-39.7-.9-59.5 0c9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39c2.5 2.2 5 4.6 7.6 7c-15.5 16.7-29.8 34.5-42.9 53.1c-22.6 2-45 5.5-67.2 10.4c-1.3-5.1-2.4-10.3-3.5-15.5c-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9c-21.3-6.7-45.5-17.3-63-31.2c-10.1-7-16.9-17.8-18.8-29.9c0-18.3 31.6-41.7 77.2-57.6c5.7-2 11.5-3.8 17.3-5.5c6.8 21.7 15 43 24.5 63.6c-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3c-11.1 5.3-23.9 5.8-35.3 1.3c-15.9-9.2-22.5-44.5-13.5-92c1.1-5.6 2.3-11.2 3.7-16.7c22.4 4.8 45 8.1 67.9 9.8c13.2 18.7 27.7 36.6 43.2 53.4c-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3c9.6.4 19.5.6 29.5.6c10.3 0 20.4-.2 30.4-.7c-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3c-15.9 9.2-49.8-2.8-86.4-34.2c-4.2-3.6-8.4-7.5-12.7-11.5c15.3-16.9 29.4-34.8 42.2-53.6c22.9-1.9 45.7-5.4 68.2-10.5c1 4.1 1.9 8.2 2.7 12.2c4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6c-7-21.8-15.6-43.1-25.5-63.8c9.6-20.4 17.7-41.4 24.5-62.9c5.2 1.5 10.2 3.1 15 4.7c46.6 16 79.3 39.8 79.3 58c0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z'
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/*end::Client*/}
                    {/*begin::Client*/}
                    <div className='col-md-6 mb-4 col-6' data-bs-toggle='tooltip' title='Vodafone'>
                      <div className='d-flex flex-center flex-col'>
                        <p
                          style={{
                            marginBottom: 2,
                            color: '#fff',
                            fontWeight: 'bold',
                            textAlign: 'center',
                          }}
                        >
                          SASS/SCSS
                        </p>
                        <div className='d-flex flex-center '>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            aria-hidden='true'
                            role='img'
                            width='40'
                            height='40'
                            preserveAspectRatio='xMidYMid meet'
                            viewBox='0 0 32 32'
                            fill='#ffff'
                          >
                            <path
                              fill='#ffff'
                              d='M15.092 22.146c-.015.03-.03.054 0 0zm12.456-4.35c-1.006 0-1.998.23-2.9.675c-.295-.595-.6-1.115-.65-1.505c-.06-.455-.125-.725-.055-1.265s.385-1.305.38-1.36c-.005-.055-.07-.33-.715-.335s-1.2.125-1.265.295a6.09 6.09 0 0 0-.265.955c-.115.585-1.289 2.675-1.954 3.765c-.22-.425-.405-.8-.445-1.1c-.06-.455-.125-.725-.055-1.265s.385-1.305.38-1.36c-.005-.055-.07-.33-.714-.335s-1.2.125-1.265.295c-.065.17-.135.57-.265.955s-1.695 3.865-2.104 4.77c-.21.46-.39.83-.52 1.08c-.02.04-.035.065-.045.085c.015-.025.025-.05.025-.04c-.11.215-.175.335-.175.335v.005c-.085.16-.18.305-.225.305c-.03 0-.095-.42.015-.995c.235-1.21.79-3.09.785-3.155c-.005-.035.105-.36-.365-.535c-.455-.165-.62.11-.66.11s-.07.1-.07.1s.505-2.12-.97-2.12c-.92 0-2.2 1.01-2.829 1.925c-.395.215-1.25.68-2.15 1.175l-1.035.57c-.025-.025-.045-.05-.07-.075c-1.79-1.91-5.094-3.26-4.954-5.825c.05-.935.375-3.39 6.354-6.37c4.9-2.44 8.817-1.77 9.492-.28c.97 2.125-2.095 6.08-7.183 6.65c-1.94.215-2.959-.535-3.214-.815c-.265-.295-.305-.31-.405-.255c-.165.09-.06.35 0 .505c.15.395.775 1.095 1.84 1.445c.935.305 3.209.475 5.958-.59c3.089-1.19 5.494-4.505 4.788-7.28c-.718-2.82-5.394-3.745-9.815-2.175c-2.635.935-5.484 2.405-7.533 4.32C.26 11.361-.129 13.346.031 14.176c.57 2.945 4.629 4.865 6.253 6.285l-.225.125c-.815.405-3.909 2.025-4.684 3.735c-.875 1.94.145 3.33.814 3.52c2.09.58 4.229-.465 5.379-2.18s1.01-3.955.48-4.975c-.005-.015-.015-.025-.02-.04a72.558 72.558 0 0 1 1.815-1.04c-.2.54-.345 1.19-.42 2.13c-.09 1.1.365 2.525.955 3.085c.26.245.574.25.77.25c.69 0 1-.57 1.345-1.25c.425-.83.8-1.795.8-1.795s-.47 2.61.815 2.61c.47 0 .94-.605 1.15-.915v.005s.01-.02.035-.06c.05-.075.075-.12.075-.12v-.015c.19-.325.605-1.07 1.23-2.3c.81-1.59 1.584-3.575 1.584-3.575c.075.436.179.867.31 1.29c.14.475.435.995.67 1.5c-.19.26-.305.41-.305.41c0 .004.002.007.005.01c-.15.2-.32.415-.495.625c-.639.76-1.4 1.63-1.5 1.88c-.12.295-.09.515.14.685c.17.13.47.15.785.125c.575-.04.98-.18 1.175-.27a4.11 4.11 0 0 0 1.01-.53c.625-.46 1.005-1.12.97-1.99c-.02-.48-.175-.96-.365-1.41c.055-.08.115-.165.17-.25a26.716 26.716 0 0 0 1.755-3.031c.075.436.178.867.31 1.29c.12.405.355.85.57 1.285c-.93.755-1.505 1.63-1.704 2.205c-.37 1.065-.08 1.545.465 1.655c.245.05.595-.065.855-.175c.386-.129.75-.316 1.079-.555c.625-.46 1.23-1.105 1.189-1.98c-.015-.395-.125-.79-.27-1.17c.785-.33 1.805-.51 3.105-.36c2.784.325 3.329 2.065 3.224 2.79s-.69 1.13-.885 1.25c-.195.12-.255.165-.24.255c.025.13.115.125.28.095c.23-.04 1.46-.59 1.515-1.935c.08-1.7-1.555-3.57-4.45-3.555zM6.089 25.031c-.92 1.005-2.209 1.385-2.764 1.065c-.595-.346-.36-1.825.774-2.896c.69-.65 1.58-1.25 2.17-1.62c.135-.08.33-.2.57-.345a.828.828 0 0 1 .06-.035c.045-.03.095-.055.145-.085c.414 1.52.015 2.86-.955 3.915zm6.718-4.57c-.32.785-.994 2.785-1.405 2.68c-.35-.09-.565-1.615-.07-3.115c.25-.755.78-1.655 1.095-2.005c.505-.565 1.06-.745 1.19-.52c.175.295-.61 2.47-.81 2.96zm5.55 2.65c-.135.07-.26.115-.32.08c-.045-.025.055-.12.055-.12s.695-.745.97-1.085c.16-.2.345-.435.545-.695c0 .025.005.05.005.08c-.006.895-.866 1.5-1.256 1.74zm4.28-.975c-.1-.07-.085-.305.25-1.035c.13-.285.43-.765.95-1.225c.059.174.091.356.095.54c-.005 1.125-.81 1.545-1.295 1.72z'
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/*end::Client*/}
                    {/*begin::Client*/}
                    <div className='col-md-6 mb-4 col-6' data-bs-toggle='tooltip' title='Vodafone'>
                      <div className='d-flex flex-center flex-col'>
                        <p
                          style={{
                            marginBottom: 2,
                            color: '#fff',
                            fontWeight: 'bold',
                            textAlign: 'center',
                          }}
                        >
                          REDUX/REDUX-TOOLKIT
                        </p>
                        <div className='d-flex flex-center '>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            aria-hidden='true'
                            role='img'
                            width='40'
                            height='40'
                            preserveAspectRatio='xMidYMid meet'
                            viewBox='0 0 512 512'
                            fill='#ffff'
                          >
                            <path
                              fill='#ffff'
                              d='M290.583 477.715c9.087-6.49 22.07-16.877 29.21-23.368c124.456 49.444 165.06-47.194 161.818-84.077c-3.59-40.84-54.299-157.39-226.728-157.393c-8.108 19.003-31.817 28.536-51.427 17.177c-24.066-13.94-24.066-48.977 0-62.916c18.695-10.83 41.111-2.668 50.188 14.581c104.685-.532 222.046 43.93 254.864 167.65c23.67 89.225-75.634 193.24-217.925 128.346zm64.406-126.193c17.32-2.041 32.333-16.497 32.333-36.085c0-27.879-30.405-45.398-54.598-31.458c-21.223 12.228-23.823 40.69-7.81 56.904C267.471 447.981 139.18 489.856 71.48 449.208c-37.49-22.51-76.15-103.092 13.982-177.262c-2.597-8.438-6.492-22.719-8.439-33.105c-162.047 122.116-45.399 316.424 137.312 240.755c49.398-20.458 102.958-56.213 140.653-128.074zm-197.604 41.46c24.227 13.94 54.675-3.58 54.675-31.458c0-23.266-21.205-39.3-42.303-35.873C35.742 75.325 317.897-73.33 354.196 163.544l32.456 9.737C363.052-17.261 220.585.174 174.945 38.765C140.74 67.688 49.3 169.46 143.772 343.792c-9.103 16.39-4.566 38.73 13.613 49.19z'
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/*end::Client*/}
                    {/*begin::Client*/}
                    <div
                      className='col-md-6 mb-4 col-6'
                      data-bs-toggle='tooltip'
                      title='KPMG International'
                    >
                      <div className='d-flex flex-center flex-col'>
                        <p
                          style={{
                            marginBottom: 2,
                            color: '#fff',
                            fontWeight: 'bold',
                            textAlign: 'center',
                          }}
                        >
                          NEXTJS
                        </p>
                        <div className='d-flex flex-center '>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            aria-hidden='true'
                            role='img'
                            width='40'
                            height='40'
                            preserveAspectRatio='xMidYMid meet'
                            viewBox='0 0 15 15'
                          >
                            <path
                              fill='#ffff'
                              fill-rule='evenodd'
                              d='M0 7.5a7.5 7.5 0 1 1 11.697 6.216L4.907 4.21A.5.5 0 0 0 4 4.5V12h1V6.06l5.83 8.162A7.5 7.5 0 0 1 0 7.5ZM10 10V4h1v6h-1Z'
                              clip-rule='evenodd'
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/*end::Client*/} {/*begin::Client*/}
                    <div
                      className='col-md-6 mb-4 col-6'
                      data-bs-toggle='tooltip'
                      title='KPMG International'
                    >
                      <div className='d-flex flex-center flex-col'>
                        <p
                          style={{
                            marginBottom: 2,
                            color: '#fff',
                            fontWeight: 'bold',
                            textAlign: 'center',
                          }}
                        >
                          TAILWINDCSS
                        </p>
                        <div className='d-flex flex-center '>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            aria-hidden='true'
                            role='img'
                            width='40'
                            height='40'
                            preserveAspectRatio='xMidYMid meet'
                            viewBox='0 0 512 512'
                            fill='#ffff'
                          >
                            <path
                              fill='#ffff'
                              d='M128 204.667C145.062 136.227 187.738 102 256 102c102.4 0 115.2 77 166.4 89.833c34.138 8.56 64-4.273 89.6-38.5C494.938 221.773 452.262 256 384 256c-102.4 0-115.2-77-166.4-89.833c-34.138-8.56-64 4.273-89.6 38.5zm-128 154C17.062 290.227 59.738 256 128 256c102.4 0 115.2 77 166.4 89.833c34.138 8.56 64-4.273 89.6-38.5C366.938 375.773 324.262 410 256 410c-102.4 0-115.2-77-166.4-89.833c-34.138-8.56-64 4.273-89.6 38.5z'
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/*end::Client*/}
                    {/*begin::Client*/}
                    <div
                      className='col-md-6 mb-4 col-6'
                      data-bs-toggle='tooltip'
                      title='KPMG International'
                    >
                      <div className='d-flex flex-center flex-col'>
                        <p
                          style={{
                            marginBottom: 2,
                            color: '#fff',
                            fontWeight: 'bold',
                            textAlign: 'center',
                          }}
                        >
                          ANTDESIGN
                        </p>
                        <div className='d-flex flex-center '>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            aria-hidden='true'
                            role='img'
                            width='40'
                            height='40'
                            preserveAspectRatio='xMidYMid meet'
                            viewBox='0 0 1024 1024'
                            fill='#ffff'
                          >
                            <path
                              fill='#ffff'
                              d='M716.3 313.8c19-18.9 19-49.7 0-68.6l-69.9-69.9l.1.1c-18.5-18.5-50.3-50.3-95.3-95.2c-21.2-20.7-55.5-20.5-76.5.5L80.9 474.2a53.84 53.84 0 0 0 0 76.4L474.6 944a54.14 54.14 0 0 0 76.5 0l165.1-165c19-18.9 19-49.7 0-68.6a48.7 48.7 0 0 0-68.7 0l-125 125.2c-5.2 5.2-13.3 5.2-18.5 0L189.5 521.4c-5.2-5.2-5.2-13.3 0-18.5l314.4-314.2c.4-.4.9-.7 1.3-1.1c5.2-4.1 12.4-3.7 17.2 1.1l125.2 125.1c19 19 49.8 19 68.7 0zM408.6 514.4a106.3 106.2 0 1 0 212.6 0a106.3 106.2 0 1 0-212.6 0zm536.2-38.6L821.9 353.5c-19-18.9-49.8-18.9-68.7.1a48.4 48.4 0 0 0 0 68.6l83 82.9c5.2 5.2 5.2 13.3 0 18.5l-81.8 81.7a48.4 48.4 0 0 0 0 68.6a48.7 48.7 0 0 0 68.7 0l121.8-121.7a53.93 53.93 0 0 0-.1-76.4z'
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    {/*end::Client*/}
                  </div>
                </div>
              </div>
              {/*end::Heading*/}
              {/*begin::Clients*/}

              {/*end::Clients*/}
            </div>
            {/*end::Landing hero*/}
          </div>
          {/*end::Wrapper*/}
          {/*begin::Curve bottom*/}
          <div className='landing-curve landing-dark-color mb-10 mb-lg-20'>
            <svg viewBox='15 12 1470 48' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M0 11C3.93573 11.3356 7.85984 11.6689 11.7725 12H1488.16C1492.1 11.6689 1496.04 11.3356 1500 11V12H1488.16C913.668 60.3476 586.282 60.6117 11.7725 12H0V11Z'
                fill='currentColor'
              />
            </svg>
          </div>
          {/*end::Curve bottom*/}
        </div>
        <div id='kt_content_container' className='container'>
          <div className='card'>
            {/*begin::Body*/}
            <div className='card-body'>
              {/*begin::Section*/}
              <div className='mb-17'>
                {/*begin::Title*/}
                <h3 className='text-black mb-7'>Latest Articles, News &amp; Updates</h3>
                {/*end::Title*/}
                {/*begin::Separator*/}
                <div className='separator separator-dashed mb-9' />
                {/*end::Separator*/}
                {/*begin::Row*/}
                <div className='row'>
                  {/*begin::Col*/}
                  <div className='col-md-6'>
                    {/*begin::Feature post*/}
                    <div className='h-100 d-flex flex-column justify-content-between pe-lg-6 mb-lg-0 mb-10'>
                      {/*begin::Video*/}
                      <div className='mb-3'></div>
                      {/*end::Video*/}
                      {/*begin::Body*/}
                      <div className='mb-5'>
                        {/*begin::Title*/}
                        <p className='fs-2 text-dark fw-bolder text-hover-primary text-dark lh-base'>
                          Metronic Admin - How To Get Started Tutorial.
                          <br />
                          Create easy customizable applications
                        </p>
                        {/*end::Title*/}
                        {/*begin::Text*/}
                        <div className='fw-bold fs-5 text-gray-600 text-dark mt-4'>
                          We’ve been focused on making the from v4 to v5 but we have also not been
                          afraid to step away been focused on from v4 to v5 speaker approachable
                          making focused a but from a step away afraid to step away been focused
                          Writing a blog post is a little like driving; you can study the highway
                          code (or read articles telling you how to write a blog post) for months,
                          but nothing can prepare you for the real thing like getting behind the
                          wheel
                        </div>
                        {/*end::Text*/}
                      </div>
                      {/*end::Body*/}
                      {/*begin::Footer*/}
                      <div className='d-flex flex-stack flex-wrap'>
                        {/*begin::Item*/}
                        <div className='d-flex align-items-center pe-2'>
                          {/*begin::Avatar*/}
                          <div className='symbol symbol-35px symbol-circle me-3'>
                            <img alt='' src='media/avatars/150-8.jpg' />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Text*/}
                          <div className='fs-5 fw-bolder'>
                            <a
                              href='../../demo1/dist/pages/profile/overview.html'
                              className='text-gray-700 text-hover-primary'
                            >
                              David Morgan
                            </a>
                            <span className='text-muted'>on Apr 27 2021</span>
                          </div>
                          {/*end::Text*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Label*/}
                        <span className='badge badge-light-primary fw-bolder my-2'>TUTORIALS</span>
                        {/*end::Label*/}
                      </div>
                      {/*end::Footer*/}
                    </div>
                    {/*end::Feature post*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className='col-md-6 justify-content-between d-flex flex-column'>
                    {/*begin::Post*/}
                    <div className='ps-lg-6 mb-16 mt-md-0 mt-17'>
                      {/*begin::Body*/}
                      <div className='mb-6'>
                        {/*begin::Title*/}
                        <p className='fw-bolder text-dark mb-4 fs-2 lh-base text-hover-primary'>
                          Metronic Admin - How To Get Started Tutorial. Create customizable
                          applications
                        </p>
                        {/*end::Title*/}
                        {/*begin::Text*/}
                        <div className='fw-bold fs-5 mt-4 text-gray-600 text-dark'>
                          We’ve been focused on making the from v4 to v5 a but we’ve also not been
                          afraid to step away been focused on from v4 to v5 speaker approachable
                          making focused
                        </div>
                        {/*end::Text*/}
                      </div>
                      {/*end::Body*/}
                      {/*begin::Footer*/}
                      <div className='d-flex flex-stack flex-wrap'>
                        {/*begin::Item*/}
                        <div className='d-flex align-items-center pe-2'>
                          {/*begin::Avatar*/}
                          <div className='symbol symbol-35px symbol-circle me-3'>
                            <img src='media/avatars/150-5.jpg' alt='' />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Text*/}
                          <div className='fs-5 fw-bolder'>
                            <a
                              href='../../demo1/dist/pages/profile/overview.html'
                              className='text-gray-700 text-hover-primary'
                            >
                              Jane Miller
                            </a>
                            <span className='text-muted'>on Apr 27 2021</span>
                          </div>
                          {/*end::Text*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Label*/}
                        <span className='badge badge-light-info fw-bolder my-2'>BLOG</span>
                        {/*end::Label*/}
                      </div>
                      {/*end::Footer*/}
                    </div>
                    {/*end::Post*/}
                    {/*begin::Post*/}
                    <div className='ps-lg-6 mb-16'>
                      {/*begin::Body*/}
                      <div className='mb-6'>
                        {/*begin::Title*/}
                        <p className='fw-bolder text-dark mb-4 fs-2 lh-base text-hover-primary'>
                          Metronic Admin - How To Get Started Tutorial.
                        </p>
                        {/*end::Title*/}
                        {/*begin::Text*/}
                        <div className='fw-bold fs-5 mt-4 text-gray-600 text-dark'>
                          We’ve been focused on making the from v4 to v5 a but we’ve also not been
                          afraid to step away
                        </div>
                        {/*end::Text*/}
                      </div>
                      {/*end::Body*/}
                      {/*begin::Footer*/}
                      <div className='d-flex flex-stack flex-wrap'>
                        {/*begin::Item*/}
                        <div className='d-flex align-items-center pe-2'>
                          {/*begin::Avatar*/}
                          <div className='symbol symbol-35px symbol-circle me-3'>
                            <img src='media/avatars/150-8.jpg' alt='' />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Text*/}
                          <div className='fs-5 fw-bolder'>
                            <a
                              href='../../demo1/dist/pages/profile/overview.html'
                              className='text-gray-700 text-hover-primary'
                            >
                              Cris Morgan
                            </a>
                            <span className='text-muted'>on Mar 14 2021</span>
                          </div>
                          {/*end::Text*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Label*/}
                        <span className='badge badge-light-primary fw-bolder my-2'>TUTORIALS</span>
                        {/*end::Label*/}
                      </div>
                      {/*end::Footer*/}
                    </div>
                    {/*end::Post*/}
                    {/*begin::Post*/}
                    <div className='ps-lg-6'>
                      {/*begin::Body*/}
                      <div className='mb-6'>
                        {/*begin::Title*/}
                        <p className='fw-bolder text-dark mb-4 fs-2 lh-base text-hover-primary'>
                          Metronic Admin - How To Get Started Tutorial. Create best applications
                        </p>
                        {/*end::Title*/}
                        {/*begin::Text*/}
                        <div className='fw-bold fs-5 mt-4 text-gray-600 text-dark'>
                          We’ve been focused on making the from v4 to v5 but we’ve also not been
                          afraid to step away been focused
                        </div>
                        {/*end::Text*/}
                      </div>
                      {/*end::Body*/}
                      {/*begin::Footer*/}
                      <div className='d-flex flex-stack flex-wrap'>
                        {/*begin::Item*/}
                        <div className='d-flex align-items-center pe-2'>
                          {/*begin::Avatar*/}
                          <div className='symbol symbol-35px symbol-circle me-3'>
                            <img src='media/avatars/150-24.jpg' alt='' />
                          </div>
                          {/*end::Avatar*/}
                          {/*begin::Text*/}
                          <div className='fs-5 fw-bolder'>
                            <a
                              href='../../demo1/dist/pages/profile/overview.html'
                              className='text-gray-700 text-hover-primary'
                            >
                              Cris Morgan
                            </a>
                            <span className='text-muted'>on Mar 14 2021</span>
                          </div>
                          {/*end::Text*/}
                        </div>
                        {/*end::Item*/}
                        {/*begin::Label*/}
                        <span className='badge badge-light-warning fw-bolder my-2'>NEWS</span>
                        {/*end::Label*/}
                      </div>
                      {/*end::Footer*/}
                    </div>
                    {/*end::Post*/}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*begin::Row*/}
              </div>
              {/*end::Section*/}
              {/*begin::Section*/}
              <div className='mb-17'>
                {/*begin::Content*/}
                <div className='d-flex flex-stack mb-5'>
                  {/*begin::Title*/}
                  <h3 className='text-black'>Video Tutorials</h3>
                  {/*end::Title*/}
                  {/*begin::Link*/}
                  <p className='fs-6 fw-bold link-primary'>View All Videos</p>
                  {/*end::Link*/}
                </div>
                {/*end::Content*/}
                {/*begin::Separator*/}
                <div className='separator separator-dashed mb-9' />
                {/*end::Separator*/}
                {/*begin::Row*/}
                <div className='row g-10'>
                  {/*begin::Col*/}
                  <div className='col-md-4'>
                    {/*begin::Feature post*/}
                    <div className='card-xl-stretch me-md-6'>
                      {/*begin::Image*/}
                      <a
                        className='d-block bgi-no-repeat bgi-size-cover bgi-position-center card-rounded position-relative min-h-175px mb-5'
                        style={{backgroundImage: 'url("media/stock/600x400/img-73.jpg")'}}
                        data-fslightbox='lightbox-video-tutorials'
                        href='https://www.youtube.com/embed/ptgwzvvAHy4'
                      >
                        <img
                          src='media/svg/misc/video-play.svg'
                          className='position-absolute top-50 start-50 translate-middle'
                          alt=''
                        />
                      </a>
                      {/*end::Image*/}
                      {/*begin::Body*/}
                      <div className='m-0'>
                        {/*begin::Title*/}
                        <a
                          href='../../demo1/dist/pages/profile/overview.html'
                          className='fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base'
                        >
                          Metronic Admin - How To Started the Dashboard Tutorial
                        </a>
                        {/*end::Title*/}
                        {/*begin::Text*/}
                        <div className='fw-bold fs-5 text-gray-600 text-dark my-4'>
                          We’ve been focused on making a the from also not been afraid to and step
                          away been focused create eye
                        </div>
                        {/*end::Text*/}
                        {/*begin::Content*/}
                        <div className='fs-6 fw-bolder'>
                          {/*begin::Author*/}
                          <a
                            href='../../demo1/dist/pages/profile/overview.html'
                            className='text-gray-700 text-hover-primary'
                          >
                            Jane Miller
                          </a>
                          {/*end::Author*/}
                          {/*begin::Date*/}
                          <span className='text-muted'>on Mar 21 2021</span>
                          {/*end::Date*/}
                        </div>
                        {/*end::Content*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Feature post*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className='col-md-4'>
                    {/*begin::Feature post*/}
                    <div className='card-xl-stretch mx-md-3'>
                      {/*begin::Image*/}
                      <a
                        className='d-block bgi-no-repeat bgi-size-cover bgi-position-center card-rounded position-relative min-h-175px mb-5'
                        style={{backgroundImage: 'url("media/stock/600x400/img-74.jpg")'}}
                        data-fslightbox='lightbox-video-tutorials'
                        href='https://www.youtube.com/embed/UPNvy-2ZtQM'
                      >
                        <img
                          src='media/svg/misc/video-play.svg'
                          className='position-absolute top-50 start-50 translate-middle'
                          alt=''
                        />
                      </a>
                      {/*end::Image*/}
                      {/*begin::Body*/}
                      <div className='m-0'>
                        {/*begin::Title*/}
                        <a
                          href='../../demo1/dist/pages/profile/overview.html'
                          className='fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base'
                        >
                          Metronic Admin - How To Started the Dashboard Tutorial
                        </a>
                        {/*end::Title*/}
                        {/*begin::Text*/}
                        <div className='fw-bold fs-5 text-gray-600 text-dark my-4'>
                          We’ve been focused on making the from v4 to v5 but we have also not been
                          afraid to step away been focused
                        </div>
                        {/*end::Text*/}
                        {/*begin::Content*/}
                        <div className='fs-6 fw-bolder'>
                          {/*begin::Author*/}
                          <a
                            href='../../demo1/dist/pages/profile/overview.html'
                            className='text-gray-700 text-hover-primary'
                          >
                            Cris Morgan
                          </a>
                          {/*end::Author*/}
                          {/*begin::Date*/}
                          <span className='text-muted'>on Apr 14 2021</span>
                          {/*end::Date*/}
                        </div>
                        {/*end::Content*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Feature post*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className='col-md-4'>
                    {/*begin::Feature post*/}
                    <div className='card-xl-stretch ms-md-6'>
                      {/*begin::Image*/}
                      <a
                        className='d-block bgi-no-repeat bgi-size-cover bgi-position-center card-rounded position-relative min-h-175px mb-5'
                        style={{backgroundImage: 'url("media/stock/600x400/img-47.jpg")'}}
                        data-fslightbox='lightbox-video-tutorials'
                        href='https://www.youtube.com/embed/gq3eQKc71kc'
                      >
                        <img
                          src='media/svg/misc/video-play.svg'
                          className='position-absolute top-50 start-50 translate-middle'
                          alt=''
                        />
                      </a>
                      {/*end::Image*/}
                      {/*begin::Body*/}
                      <div className='m-0'>
                        {/*begin::Title*/}
                        <a
                          href='../../demo1/dist/pages/profile/overview.html'
                          className='fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base'
                        >
                          Metronic Admin - How To Started the Dashboard Tutorial
                        </a>
                        {/*end::Title*/}
                        {/*begin::Text*/}
                        <div className='fw-bold fs-5 text-gray-600 text-dark my-4'>
                          We’ve been focused on making the from v4 to v5 but we’ve also not been
                          afraid to step away been focused
                        </div>
                        {/*end::Text*/}
                        {/*begin::Content*/}
                        <div className='fs-6 fw-bolder'>
                          {/*begin::Author*/}
                          <a
                            href='../../demo1/dist/pages/profile/overview.html'
                            className='text-gray-700 text-hover-primary'
                          >
                            Carles Nilson
                          </a>
                          {/*end::Author*/}
                          {/*begin::Date*/}
                          <span className='text-muted'>on May 14 2021</span>
                          {/*end::Date*/}
                        </div>
                        {/*end::Content*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Feature post*/}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*end::Row*/}
              </div>
              {/*end::Section*/}
              {/*begin::Section*/}
              <div className='mb-17'>
                {/*begin::Content*/}
                <div className='d-flex flex-stack mb-5'>
                  {/*begin::Title*/}
                  <h3 className='text-black'>Hottest Bundles</h3>
                  {/*end::Title*/}
                  {/*begin::Link*/}
                  <p className='fs-6 fw-bold link-primary'>View All Offers</p>
                  {/*end::Link*/}
                </div>
                {/*end::Content*/}
                {/*begin::Separator*/}
                <div className='separator separator-dashed mb-9' />
                {/*end::Separator*/}
                {/*begin::Row*/}
                <div className='row g-10'>
                  {/*begin::Col*/}
                  <div className='col-md-4'>
                    {/*begin::Hot sales post*/}
                    <div className='card-xl-stretch me-md-6'>
                      {/*begin::Overlay*/}
                      <a
                        className='d-block overlay'
                        data-fslightbox='lightbox-hot-sales'
                        href='media/stock/600x400/img-23.jpg'
                      >
                        {/*begin::Image*/}
                        <div
                          className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px'
                          style={{backgroundImage: 'url("media/stock/600x400/img-23.jpg")'}}
                        />
                        {/*end::Image*/}
                        {/*begin::Action*/}
                        <div className='overlay-layer card-rounded bg-dark bg-opacity-25'>
                          <i className='bi bi-eye-fill fs-2x text-white' />
                        </div>
                        {/*end::Action*/}
                      </a>
                      {/*end::Overlay*/}
                      {/*begin::Body*/}
                      <div className='mt-5'>
                        {/*begin::Title*/}
                        <p className='fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base'>
                          25 Products Mega Bundle with 50% off discount amazing
                        </p>
                        {/*end::Title*/}
                        {/*begin::Text*/}
                        <div className='fw-bold fs-5 text-gray-600 text-dark mt-3'>
                          We’ve been focused on making a the from also not been eye
                        </div>
                        {/*end::Text*/}
                        {/*begin::Text*/}
                        <div className='fs-6 fw-bolder mt-5 d-flex flex-stack'>
                          {/*begin::Label*/}
                          <span className='badge border-dashed fs-2 fw-bolder text-dark p-2'>
                            <span className='fs-6 fw-bold text-gray-400'>$</span>28
                          </span>
                          {/*end::Label*/}
                          {/*begin::Action*/}
                          <p className='btn btn-primary'>Purchase</p>
                          {/*end::Action*/}
                        </div>
                        {/*end::Text*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Hot sales post*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className='col-md-4'>
                    {/*begin::Hot sales post*/}
                    <div className='card-xl-stretch mx-md-3'>
                      {/*begin::Overlay*/}
                      <a
                        className='d-block overlay'
                        data-fslightbox='lightbox-hot-sales'
                        href='media/stock/600x600/img-14.jpg'
                      >
                        {/*begin::Image*/}
                        <div
                          className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px'
                          style={{backgroundImage: 'url("media/stock/600x600/img-14.jpg")'}}
                        />
                        {/*end::Image*/}
                        {/*begin::Action*/}
                        <div className='overlay-layer card-rounded bg-dark bg-opacity-25'>
                          <i className='bi bi-eye-fill fs-2x text-white' />
                        </div>
                        {/*end::Action*/}
                      </a>
                      {/*end::Overlay*/}
                      {/*begin::Body*/}
                      <div className='mt-5'>
                        {/*begin::Title*/}
                        <p className='fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base'>
                          25 Products Mega Bundle with 50% off discount amazing
                        </p>
                        {/*end::Title*/}
                        {/*begin::Text*/}
                        <div className='fw-bold fs-5 text-gray-600 text-dark mt-3'>
                          We’ve been focused on making a the from also not been eye
                        </div>
                        {/*end::Text*/}
                        {/*begin::Text*/}
                        <div className='fs-6 fw-bolder mt-5 d-flex flex-stack'>
                          {/*begin::Label*/}
                          <span className='badge border-dashed fs-2 fw-bolder text-dark p-2'>
                            <span className='fs-6 fw-bold text-gray-400'>$</span>27
                          </span>
                          {/*end::Label*/}
                          {/*begin::Action*/}
                          <p className='btn btn-primary'>Purchase</p>
                          {/*end::Action*/}
                        </div>
                        {/*end::Text*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Hot sales post*/}
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className='col-md-4'>
                    {/*begin::Hot sales post*/}
                    <div className='card-xl-stretch ms-md-6'>
                      {/*begin::Overlay*/}
                      <a
                        className='d-block overlay'
                        data-fslightbox='lightbox-hot-sales'
                        href='media/stock/600x400/img-71.jpg'
                      >
                        {/*begin::Image*/}
                        <div
                          className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px'
                          style={{backgroundImage: 'url("media/stock/600x400/img-71.jpg")'}}
                        />
                        {/*end::Image*/}
                        {/*begin::Action*/}
                        <div className='overlay-layer card-rounded bg-dark bg-opacity-25'>
                          <i className='bi bi-eye-fill fs-2x text-white' />
                        </div>
                        {/*end::Action*/}
                      </a>
                      {/*end::Overlay*/}
                      {/*begin::Body*/}
                      <div className='mt-5'>
                        {/*begin::Title*/}
                        <p className='fs-4 text-dark fw-bolder text-hover-primary text-dark lh-base'>
                          25 Products Mega Bundle with 50% off discount amazing
                        </p>
                        {/*end::Title*/}
                        {/*begin::Text*/}
                        <div className='fw-bold fs-5 text-gray-600 text-dark mt-3'>
                          We’ve been focused on making a the from also not been eye
                        </div>
                        {/*end::Text*/}
                        {/*begin::Text*/}
                        <div className='fs-6 fw-bolder mt-5 d-flex flex-stack'>
                          {/*begin::Label*/}
                          <span className='badge border-dashed fs-2 fw-bolder text-dark p-2'>
                            <span className='fs-6 fw-bold text-gray-400'>$</span>25
                          </span>
                          {/*end::Label*/}
                          {/*begin::Action*/}
                          <p className='btn btn-primary'>Purchase</p>
                          {/*end::Action*/}
                        </div>
                        {/*end::Text*/}
                      </div>
                      {/*end::Body*/}
                    </div>
                    {/*end::Hot sales post*/}
                  </div>
                  {/*end::Col*/}
                </div>
                {/*end::Row*/}
              </div>
              {/*end::Section*/}
              {/*begin::latest instagram*/}
              <div>
                {/*begin::Section*/}
                <div className='m-0'>
                  {/*begin::Content*/}
                  <div className='d-flex flex-stack'>
                    {/*begin::Title*/}
                    <h3 className='text-black'>Latest Instagram Posts</h3>
                    {/*end::Title*/}
                    {/*begin::Link*/}
                    <p className='fs-6 fw-bold link-primary'>View Instagram</p>
                    {/*end::Link*/}
                  </div>
                  {/*end::Content*/}
                  {/*begin::Separator*/}
                  <div className='separator separator-dashed border-gray-300 mb-9 mt-5' />
                  {/*end::Separator*/}
                </div>
                {/*end::Section*/}
                {/*begin::Row*/}
                <div className='row g-10 row-cols-2 row-cols-lg-5'>
                  {/*begin::Col*/}
                  <div className='col'>
                    {/*begin::Overlay*/}
                    <a
                      className='d-block overlay'
                      data-fslightbox='lightbox-hot-sales'
                      href='media/demos/demo9.png'
                    >
                      {/*begin::Image*/}
                      <div
                        className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px'
                        style={{backgroundImage: 'url("media/demos/demo9.png")'}}
                      />
                      {/*end::Image*/}
                      {/*begin::Action*/}
                      <div className='overlay-layer card-rounded bg-dark bg-opacity-25'>
                        <i className='bi bi-eye-fill fs-2x text-white' />
                      </div>
                      {/*end::Action*/}
                    </a>
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className='col'>
                    {/*begin::Overlay*/}
                    <a
                      className='d-block overlay'
                      data-fslightbox='lightbox-hot-sales'
                      href='media/stock/900x600/32.jpg'
                    >
                      {/*begin::Image*/}
                      <div
                        className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px'
                        style={{backgroundImage: 'url("media/stock/900x600/32.jpg")'}}
                      />
                      {/*end::Image*/}
                      {/*begin::Action*/}
                      <div className='overlay-layer card-rounded bg-dark bg-opacity-25'>
                        <i className='bi bi-eye-fill fs-2x text-white' />
                      </div>
                      {/*end::Action*/}
                    </a>
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className='col'>
                    {/*begin::Overlay*/}
                    <a
                      className='d-block overlay'
                      data-fslightbox='lightbox-hot-sales'
                      href='media/demos/demo4.png'
                    >
                      {/*begin::Image*/}
                      <div
                        className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px'
                        style={{backgroundImage: 'url("media/demos/demo4.png")'}}
                      />
                      {/*end::Image*/}
                      {/*begin::Action*/}
                      <div className='overlay-layer card-rounded bg-dark bg-opacity-25'>
                        <i className='bi bi-eye-fill fs-2x text-white' />
                      </div>
                      {/*end::Action*/}
                    </a>
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className='col'>
                    {/*begin::Overlay*/}
                    <p className='d-block overlay' data-fslightbox='lightbox-hot-sales'>
                      {/*begin::Image*/}
                      <div
                        className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px'
                        style={{backgroundImage: 'url("media/stock/600x600/img-13.jpg")'}}
                      />
                      {/*end::Image*/}
                      {/*begin::Action*/}
                      <div className='overlay-layer card-rounded bg-dark bg-opacity-25'>
                        <i className='bi bi-eye-fill fs-2x text-white' />
                      </div>
                      {/*end::Action*/}
                    </p>
                  </div>
                  {/*end::Col*/}
                  {/*begin::Col*/}
                  <div className='col'>
                    {/*begin::Overlay*/}
                    <a
                      className='d-block overlay'
                      data-fslightbox='lightbox-hot-sales'
                      href='media/stock/600x400/img-52.jpg'
                    >
                      {/*begin::Image*/}
                      <div
                        className='overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-175px'
                        style={{backgroundImage: 'url("media/stock/600x400/img-52.jpg")'}}
                      />
                      {/*end::Image*/}
                      {/*begin::Action*/}
                      <div className='overlay-layer card-rounded bg-dark bg-opacity-25'>
                        <i className='bi bi-eye-fill fs-2x text-white' />
                      </div>
                      {/*end::Action*/}
                    </a>
                  </div>
                  {/*end::Col*/}
                </div>
                {/*begin::Row*/}
              </div>
              {/*end::latest instagram*/}
            </div>
            {/*end::Body*/}
          </div>
        </div>
      </div>
    </>
  )
}
export default HomePage
