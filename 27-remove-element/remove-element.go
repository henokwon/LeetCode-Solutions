func removeElement(nums []int, val int) int {
    j := 0

    // Iterate
    for i := 0; i < len(nums); i++ {
        if nums[i] != val {
            // Move valid elements to the front of the array
            nums[j] = nums[i]
            j++
        }
    }

    return j // The new length of the array without the `val` elements

}