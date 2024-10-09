func merge(nums1 []int, m int, nums2 []int, n int)  {
    // Edge case: if nums2 is empty, no need to merge.
    if n == 0 {
        return
    }

    // Start from the last
    i, j, k := m-1, n-1, m+n-1

    // Compare elements of both arrays
    for i >= 0 && j >= 0 {
        if nums1[i] > nums2[j] {
            nums1[k] = nums1[i]  // Place larger element in th efirst array
            i--
        } else {
            nums1[k] = nums2[j]  // Place element from nums2
            j--
        }
        k--
    }

    // If nums2 has remaining elements, copy them to the first array
    for j >= 0 {
        nums1[k] = nums2[j]
        k--
        j--
    }
}