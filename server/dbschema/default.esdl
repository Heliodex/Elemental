module default {
	type User {
		required name: str;
		required currency: int64 {
			default := 0;
		};
	}
}
