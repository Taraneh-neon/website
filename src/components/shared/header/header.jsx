import clsx from 'clsx';
import PropTypes from 'prop-types';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import GithubStarCounter from 'components/shared/github-star-counter';
import Link from 'components/shared/link';
import Logo from 'components/shared/logo';
import MobileMenu from 'components/shared/mobile-menu';
import LINKS from 'constants/links';
import MENUS from 'constants/menus.js';
import ChevronIcon from 'icons/chevron-down.inline.svg';
import ArrowIcon from 'icons/header/arrow-right.inline.svg';

const Header = ({
  className = null,
  theme = 'black-pure',
  isSticky = false,
  isBlogPage = false,
  isDocPage = false,
  withBorder = false,
}) => {
  const isThemeBlack = theme === 'black-pure';

  return (
    <>
      <header
        className={clsx(
          'safe-paddings left-0 right-0 top-0 z-40 h-16 w-full dark:bg-black-pure',
          isSticky ? 'sticky md:relative' : 'absolute lg:relative',
          isThemeBlack ? 'bg-black-pure' : 'bg-white',
          withBorder && 'border-b border-gray-new-94 dark:border-gray-new-10',
          className
        )}
      >
        <Container className="flex items-center justify-between py-4 md:!px-5" size="1344">
          <div className="flex items-center gap-x-[90px] xl:gap-x-16">
            <Link to="/">
              <span className="sr-only">Neon</span>
              <Logo className="h-7" isThemeBlack={isThemeBlack} width={102} height={28} priority />
            </Link>

            <nav>
              <ul className="flex gap-x-10 xl:gap-x-8 lg:hidden">
                {MENUS.header.map(({ to, text, items }, index) => {
                  const Tag = to ? Link : 'button';
                  return (
                    <li
                      className={clsx(
                        'relative [perspective:2000px]',
                        items?.length > 0 && 'group'
                      )}
                      key={index}
                    >
                      <Tag
                        className={clsx(
                          'flex items-center gap-x-1 whitespace-pre text-sm',
                          isThemeBlack ? 'text-white' : 'text-black dark:text-white'
                        )}
                        to={to}
                        theme={isThemeBlack && to ? 'white' : 'black'}
                      >
                        {text}
                        {items?.length > 0 && (
                          <ChevronIcon
                            className={clsx(
                              '-mb-px w-2.5 opacity-60 dark:text-white [&_path]:stroke-2',
                              isThemeBlack ? 'text-white' : 'text-black-new'
                            )}
                          />
                        )}
                      </Tag>
                      {items?.length > 0 && (
                        <div
                          className={clsx(
                            'absolute -left-5 top-full w-[300px] pt-5',
                            'pointer-events-none opacity-0',
                            'origin-top-left transition-[opacity,transform] duration-200 [transform:rotateX(-12deg)_scale(0.9)]',
                            'group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-hover:[transform:none]'
                          )}
                        >
                          <ul
                            className={clsx(
                              'relative flex min-w-[248px] flex-col gap-y-0.5 rounded-[14px] border p-2.5 dark:border-[#16181D] dark:bg-[#0B0C0F] dark:shadow-[0px_14px_20px_0px_rgba(0,0,0,.5)]',
                              isThemeBlack
                                ? 'border-[#16181D] bg-[#0B0C0F] shadow-[0px_14px_20px_0px_rgba(0,0,0,.5)]'
                                : 'border-gray-new-94 bg-white shadow-[0px_14px_20px_0px_rgba(0,0,0,.1)]'
                            )}
                          >
                            {items.map(({ icon, text, description, to }, index) => (
                              <li key={index}>
                                <Link
                                  className={clsx(
                                    'group/link relative flex items-center overflow-hidden whitespace-nowrap rounded-[14px] p-2 dark:text-white',
                                    'before:absolute before:inset-0 before:z-10 before:opacity-0 before:transition-opacity before:duration-200 hover:before:opacity-100 dark:before:bg-[#16181D]',
                                    isThemeBlack
                                      ? 'text-white before:bg-[#16181D]'
                                      : 'text-black-new before:bg-[#f5f5f5]'
                                  )}
                                  to={to}
                                >
                                  <div
                                    className={clsx(
                                      'relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border dark:border-[#2E3038] dark:bg-[#16181D]',
                                      isThemeBlack
                                        ? 'border-[#2E3038] bg-[#16181D]'
                                        : 'border-gray-new-90 bg-[#F5F5F5]'
                                    )}
                                  >
                                    <img
                                      className={clsx(
                                        'h-5 w-5 dark:opacity-100 dark:invert-0',
                                        !isThemeBlack && 'opacity-90 invert'
                                      )}
                                      src={icon}
                                      width={20}
                                      height={20}
                                      loading="lazy"
                                      alt=""
                                      aria-hidden
                                    />
                                  </div>
                                  <span className="relative z-10 ml-2.5">
                                    <span className="block text-sm leading-dense tracking-[-0.01em] transition-colors duration-200">
                                      {text}
                                    </span>
                                    <span
                                      className={clsx(
                                        'mt-0.5 block text-[13px] font-light leading-dense tracking-[-0.02em]',
                                        isThemeBlack
                                          ? 'text-gray-new-50'
                                          : 'text-gray-new-40 dark:text-gray-new-50'
                                      )}
                                    >
                                      {description}
                                    </span>
                                  </span>
                                  <ArrowIcon
                                    className={clsx(
                                      'relative z-10 ml-auto mr-1.5 h-2.5 w-1.5 -translate-x-1 opacity-0 transition-[opacity,transform] duration-300 group-hover/link:translate-x-0 group-hover/link:opacity-100 dark:text-gray-new-70',
                                      isThemeBlack ? 'text-gray-new-70' : 'text-gray-new-40'
                                    )}
                                  />
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-x-6 lg:hidden lg:pr-12">
            <GithubStarCounter isThemeBlack={isThemeBlack} />
            <Link
              className="text-[13px] leading-none tracking-extra-tight lg:hidden"
              to={LINKS.login}
              theme={isThemeBlack ? 'white' : 'black'}
            >
              Log In
            </Link>

            <Button
              className="h-8 px-6 text-[13px] font-semibold leading-none tracking-extra-tight transition-colors duration-200 lg:hidden"
              to={LINKS.signup}
              theme="primary"
            >
              Sign Up
            </Button>
          </div>
        </Container>
      </header>
      <MobileMenu isThemeBlack={isThemeBlack} isBlogPage={isBlogPage} isDocPage={isDocPage} />
    </>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.oneOf(['black-pure', 'white']).isRequired,
  isSticky: PropTypes.bool,
  isBlogPage: PropTypes.bool,
  isDocPage: PropTypes.bool,
  withBorder: PropTypes.bool,
};

export default Header;
