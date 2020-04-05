import React from 'react';
import { IconProps } from '../../constants/icon';

const Rocket: React.SFC<IconProps> = (props) => (
  <svg viewBox="0 0 64 64" {...props}>
    <linearGradient id="prefix__a" gradientUnits="userSpaceOnUse" x1={32} x2={32} y1={63} y2={1}>
      <stop offset={0} stopColor="#9f2fff" />
      <stop offset={1} stopColor="#0bb1d3" />
    </linearGradient>
    <path
      d="M53 25.051v-2.245a31.924 31.924 0 00-6.97-19.87C45.045 1.706 43.576 1 42 1s-3.045.706-4.03 1.937A31.92 31.92 0 0031 22.806v2.245c-5.598.507-10 5.221-10 10.949v7h2.5l.3-.399A9.043 9.043 0 0131 39h2.848c.439.597.912 1.173 1.445 1.707l.293.293H38v2.083A6.01 6.01 0 0033 49c0 .471.06.927.163 1.367A5.03 5.03 0 0030.11 54H6c-1.654 0-3-1.346-3-3V12H1v39c0 2.757 2.243 5 5 5h24.101a5.009 5.009 0 005.789 3.92C37.089 61.755 39.377 63 42 63c2.59 0 4.898-1.187 6.117-3.085.296.057.591.085.883.085 2.757 0 5-2.243 5-5a4.993 4.993 0 00-2.288-4.189A5.952 5.952 0 0052 49c0-3.309-2.691-6-6-6v-2h2.414l.293-.293A14.748 14.748 0 0050.152 39H53a9.043 9.043 0 017.2 3.601l.3.399H63v-7c0-5.728-4.402-10.442-10-10.949zM39.531 4.187C40.135 3.433 41.035 3 42 3s1.865.433 2.469 1.186c.783.979 1.478 2.018 2.128 3.083C45.322 8.39 43.715 9 42 9s-3.322-.61-4.597-1.731c.65-1.064 1.345-2.103 2.128-3.082zM33 22.806c0-4.811 1.2-9.546 3.407-13.782C37.991 10.286 39.963 11 42 11s4.009-.714 5.593-1.976C49.8 13.261 51 17.996 51 22.806v7.537c0 .905-.104 1.792-.288 2.657H33.288A12.75 12.75 0 0133 30.343zM31 37a11.058 11.058 0 00-8 3.452V36c0-4.624 3.507-8.441 8-8.941v3.284c0 2.354.561 4.619 1.603 6.657zm15 8c2.206 0 4 1.794 4 4 0 .374-.065.734-.164 1.085A4.905 4.905 0 0049 50c-1.78 0-3.387.927-4.299 2.478l1.725 1.014A2.967 2.967 0 0149 52c1.654 0 3 1.346 3 3 0 1.991-1.92 3.587-4.033 2.803l-.879-.326-.382.856C45.994 59.928 44.103 61 42 61c-2.757 0-5-1.794-5-4h-2c0 .338.041.668.104.991-.035.001-.069.009-.104.009-1.654 0-3-1.346-3-3 0-1.258.799-2.361 1.935-2.797A5.996 5.996 0 0039 55v-2c-2.206 0-4-1.794-4-4s1.794-4 4-4h1v-4h4v4zm1.577-6H36.423a12.6 12.6 0 01-2.542-4h16.238a12.617 12.617 0 01-2.542 4zM61 40.452A11.058 11.058 0 0053 37h-1.603A14.577 14.577 0 0053 30.343v-3.284c4.493.5 8 4.317 8 8.941zM39 29h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm-10 2h-2v-2h2zm4-25a1 1 0 112 0 1 1 0 01-2 0zm1 21c3.86 0 7-3.14 7-7s-3.14-7-7-7-7 3.14-7 7 3.14 7 7 7zm0-12c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5zm0 8c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3zm0-4c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1zM4.2 39.4L8 34.333l3.8 5.067-1.6 1.2L9 39v9H7v-9l-1.2 1.6zM7 50h2v2H7zm10 0h2v2h-2zm2-2h-2V29l-1.2 1.6-1.6-1.2 3.8-5.066 3.8 5.066-1.6 1.2L19 29zM8 26c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3a2.95 2.95 0 00-.301-1.285l6.015-6.015c.392.187.824.3 1.286.3 1.654 0 3-1.346 3-3a2.95 2.95 0 00-.301-1.285l4.015-4.015c.392.187.824.3 1.286.3 1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3c0 .462.113.894.301 1.285L19.286 16.3A2.972 2.972 0 0018 16c-1.654 0-3 1.346-3 3 0 .462.113.894.301 1.285L9.286 26.3A2.972 2.972 0 008 26zm0 4c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm18-20c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1zm-8 8c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .449-1 1-1z"
      fill="url(#prefix__a)"
    />
  </svg>
);

export default Rocket;
