<dashboard class="px-4 py-2 flex gap-8 items-start">
	<aside aria-label="Sidebar">
		<div class="py-4 px-3 rounded ">
			<ul class="space-y-2">
				<li>
					<a
						href="/admin"
						class="flex items-center p-2 text-base font-normal rounded-lg  hover:bg-gray-100 "
					>
						<span class="ml-3">Dashboard</span>
					</a>
				</li>

				<li>
					<a
						href="/admin/reviewVideos"
						class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
					>
						<span class="flex-1 ml-3 whitespace-nowrap">Videos to review</span>
						<span
							class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200"
							>3</span
						>
					</a>
				</li>
				<li>
					<a
						href="/admin/videos"
						class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
					>
						<span class="flex-1 ml-3 whitespace-nowrap">Videos </span>
					</a>
				</li>
				<li>
					<a
						href="/admin/users"
						class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
					>
						<span class="flex-1 ml-3 whitespace-nowrap">Users</span>
					</a>
				</li>
			</ul>
		</div>
	</aside>
	<slot />
</dashboard>

<style>
	aside {
		border: solid var(--border-color) 2px;
		background-color: var(--surface-background-color);
		box-shadow: var(--primary-color) 3px 3px;
	}
</style>
