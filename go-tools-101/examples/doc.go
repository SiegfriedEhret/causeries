// This is my awesome package !
package doc

import "fmt"

// This is a private function
func thisIsPrivate() {
	fmt.Println("Hello from private func")
}

// This is a public function
func ThisIsPublic() {
	fmt.Println("Hello from public func")
}

func main() {
	thisIsPrivate()
	ThisIsPublic()
}
