const ArrowIcon = ({ color }: { color: string }) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <path
      fill='none'
      stroke={color}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='m14 7-5 5m0 0 5 5'
    />
  </svg>
);

export default ArrowIcon;
