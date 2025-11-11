import { StyleSheet, Text, View, ScrollView, } from 'react-native'
import React from 'react'

const ToDoList = ({tasks = []}) => {
    const tasksArray = tasks
  return (
    <ScrollView>
        {tasksArray.map((task)=> (
            <Text key={task} style={styles.incomplete}>{task}</Text>
        ))}
    </ScrollView>
  )
}

export default ToDoList

const styles = StyleSheet.create({
    incomplete:{
        
    }
})