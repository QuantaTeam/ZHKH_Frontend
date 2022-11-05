export const SelectStyles = () => {
  return {
    placeholder: (state) => ({
      ...state,
      fontSize: '15px',
      fontWeight: '600',
      lineHeight: '30px',
      color: '#5B8197',
    }),
    valueContainer: (state) => ({
      ...state,
      width: 'auto',
      padding: 0,
    }),
    singleValue: (state) => ({
      ...state,
      fontWeight: '500',
      fontSize: '15px',
    }),
    input: (state) => ({
      ...state,
    }),
    control: (state, { isFocused }) => ({
      ...state,
      border: isFocused ? '1px solid #7370F7' : '1px solid rgba(148, 137, 137, 0.54)',
      ':hover': {
        border: isFocused ? '1px solid #7370F7' : '1px solid rgba(148, 137, 137, 0.54)',
      },
      borderRadius: '40px',
      minHeight: '40px',
      backgroundColor: '#fff',
      boxShadow: '0px 4px 4px rgba(51, 51, 51, 0.04), 0px 4px 16px rgba(51, 51, 51, 0.08)',
      padding: '0 0 0 10px',

    }),
    indicatorsContainer: (state) => ({
      ...state,
      minHeight: '40px',
    }),
    dropdownIndicator: (state) => ({
      ...state,
      padding: '8px',
      color: '#5B8197',
    }),
    indicatorSeparator: (state) => ({
      ...state,
      display: 'none',
    }),
    option: (state, { isSelected }) => ({
      ...state,
      display: 'flex',
      alignItems: 'center',
      fontSize: '13px',
      fontWeight: '500',
      margin: '5px 0',
      padding: '0 0 0 10px',
      ':hover': {
        backgroundColor: isSelected ? '#7370F7' : '#F8F8FF',
      },
      backgroundColor: isSelected ? '#7370F7' : 'transpatent',
      color: isSelected ? '#FEFEFF' : '#333338',
      minHeight: '30px',
      borderRadius: '50px',
    }),
    menu: (state) => ({
      ...state,
      zIndex: '2',
      maxHeight: '150px',
    }),
    menuList: (state) => ({
      ...state,
      maxHeight: '150px',
    }),
  };
};