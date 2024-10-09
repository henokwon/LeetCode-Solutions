func removeElement(nums []int, val int) int {
    j := 0 // Pointer to track the position of non-val elements

    // Iterate through all elements in nums
    for i := 0; i < len(nums); i++ {
        if nums[i] != val {
            // Only assign when i and j are different to avoid unnecessary swaps
            if i != j {
                nums[j] = nums[i]
            }
            j++
        }
    }

    return j // Return the new length of the array without the val elements


}