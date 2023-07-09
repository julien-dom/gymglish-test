import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';


export default function DropdownComponent ({ departments, selectedDepartment, onDepartmentChange }) {

  const [value, setValue] = useState(selectedDepartment);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: '#E9BE59' }]}>
          Departments & Collections
        </Text>
      );
    }
    return null;
  };

  const handleDropdownChange = (e) => {
    setValue(e.value);
    setIsFocus(false);
    onDepartmentChange(e.value);
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { fontFamily:'NotoSansMono-Regular', borderColor: '#E9BE59' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={departments}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select a Department' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={handleDropdownChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 5
  },

  dropdown: {
    height: 50,
    width: 200,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    fontFamily:'NotoSansMono-Regular',
  },

  icon: {
    marginRight: 5,
  },

  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 12,
    fontFamily:'NotoSansMono-Regular'
  },

  placeholderStyle: {
    fontSize: 14,
    fontFamily:'NotoSansMono-Regular'
  },

  selectedTextStyle: {
    fontSize: 16,
    fontFamily:'NotoSansMono-Regular'
  },

  iconStyle: {
    width: 20,
    height: 20,
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    fontFamily:'NotoSansMono-Regular'
  },

  inputTextStyle: {
    fontFamily: "NotoSansMono-Regular",
  },

  itemTextStyle: {
    fontFamily: "NotoSansMono-Regular",
  },

});